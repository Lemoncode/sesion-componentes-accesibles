import React from 'react';

const useRovingTabindex = (
  ref: React.MutableRefObject<any>,
  options: { isVisible: boolean }
) => {
  const { isVisible } = options;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const focusableElements = React.useRef<HTMLElement[]>([]);

  const onRemoveFocus = () => {
    focusableElements.current.forEach((element) => {
      element.setAttribute('tabIndex', '-1');
    });
  };

  React.useEffect(() => {
    if (ref.current) {
      focusableElements.current = [...ref.current.childNodes].flatMap(
        (child) => child.firstChild as HTMLElement
      );
      if (isVisible) {
        focusableElements.current.forEach((element, index) => {
          if (index === activeIndex) {
            element.setAttribute('tabIndex', '0');
          } else {
            element.setAttribute('tabIndex', '-1');
          }
        });
      } else {
        onRemoveFocus();
      }
    }
  }, [ref]);

  const onSetFocusToElement = (element: HTMLElement) => {
    onRemoveFocus();
    element.setAttribute('tabIndex', '0');
    element.focus();
  };

  return {
    activeIndex,
    setActiveIndex,
    focusableElements,
    onSetFocusToElement,
    onRemoveFocus,
  };
};

interface MenuProps {
  menuRef: React.MutableRefObject<HTMLUListElement>;
  isOpenSubmenu: boolean;
  onOpenSubmenu: (
    submenuIndex: number,
    focusedElement: 'first' | 'last'
  ) => void;
}

export const useMenu = (props: MenuProps) => {
  const { menuRef, isOpenSubmenu, onOpenSubmenu } = props;
  const {
    activeIndex,
    setActiveIndex,
    focusableElements,
    onSetFocusToElement,
  } = useRovingTabindex(menuRef, { isVisible: true });

  const handleKeydown = (event: globalThis.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
        const nextIndex = (activeIndex + 1) % focusableElements.current.length;
        onSetFocusToElement(focusableElements.current[nextIndex]);
        setActiveIndex(nextIndex);
        break;
      case 'ArrowLeft':
        const previousIndex =
          Math.abs(activeIndex - 1) % focusableElements.current.length;
        onSetFocusToElement(focusableElements.current[previousIndex]);
        setActiveIndex(previousIndex);
        break;
      case 'ArrowDown':
      case 'Enter':
      case ' ':
        onOpenSubmenu(activeIndex, 'first');
        break;
      case 'ArrowUp':
        onOpenSubmenu(activeIndex, 'last');
        break;
    }
  };

  React.useEffect(() => {
    if (menuRef.current) {
      focusableElements.current[0].focus();
    }
  }, [menuRef]);

  React.useEffect(() => {
    if (menuRef.current) {
      menuRef.current.addEventListener('keydown', handleKeydown);
    }
    return () => {
      menuRef.current.removeEventListener('keydown', handleKeydown);
    };
  }, [menuRef, activeIndex]);

  React.useEffect(() => {
    if (!isOpenSubmenu) {
      focusableElements.current[activeIndex].focus();
    }
  }, [isOpenSubmenu]);

  return { menuRef };
};

interface OutsideElementProps {
  ref: React.MutableRefObject<any>;
  onClickOutside: () => void;
}

const useOutsideElement = (props: OutsideElementProps) => {
  const { ref, onClickOutside } = props;

  React.useEffect(() => {
    const handleClickInside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', handleClickInside);
    return () => {
      document.removeEventListener('mousedown', handleClickInside);
    };
  }, [ref]);
};

interface SubmenuProps {
  menuRef: React.MutableRefObject<HTMLUListElement>;
  submenuRef: React.MutableRefObject<HTMLUListElement>;
}

export const useSubmenu = (props: SubmenuProps) => {
  const { menuRef, submenuRef } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    activeIndex,
    setActiveIndex,
    focusableElements,
    onSetFocusToElement,
    onRemoveFocus,
  } = useRovingTabindex(submenuRef, { isVisible: isOpen });

  const handleSetIsOpen = (
    value: boolean,
    focusedElement?: 'first' | 'last'
  ) => {
    console.log('SetIsOpen');
    if (value) {
      if (focusedElement === 'first') {
        onSetFocusToElement(focusableElements.current[0]);
        setActiveIndex(0);
      } else if (focusedElement === 'last') {
        const lastIndex = focusableElements.current.length - 1;
        onSetFocusToElement(focusableElements.current[lastIndex]);
        setActiveIndex(lastIndex);
      }
    } else {
      setActiveIndex(0);
    }
    setIsOpen(value);
  };

  useOutsideElement({
    ref: submenuRef,
    onClickOutside: () => {
      handleSetIsOpen(false);
    },
  });

  const handleKeydown = (event: globalThis.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        const nextIndex = (activeIndex + 1) % focusableElements.current.length;
        onSetFocusToElement(focusableElements.current[nextIndex]);
        setActiveIndex(nextIndex);
        break;
      case 'ArrowUp':
        const previousIndex =
          Math.abs(activeIndex - 1) % focusableElements.current.length;
        onSetFocusToElement(focusableElements.current[previousIndex]);
        setActiveIndex(previousIndex);
        break;
      case 'ArrowRight':
        handleSetIsOpen(false);
        break;
      case 'ArrowLeft':
        handleSetIsOpen(false);
        break;
      case 'Escape':
        onSetFocusToElement(focusableElements.current[0]);
        setActiveIndex(0);
        handleSetIsOpen(false);
        break;
    }
  };

  React.useEffect(() => {
    if (menuRef.current && isOpen) {
      menuRef.current.addEventListener('keydown', handleKeydown);
    } else {
      onRemoveFocus();
      menuRef.current.removeEventListener('keydown', handleKeydown);
    }
    return () => {
      onRemoveFocus();
      menuRef.current.removeEventListener('keydown', handleKeydown);
    };
  }, [menuRef, isOpen, activeIndex]);

  return {
    submenuRef,
    isOpen,
    setIsOpen: handleSetIsOpen,
  };
};
