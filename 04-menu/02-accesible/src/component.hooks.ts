import React from 'react';

const useRovingTabindex = (ref: React.MutableRefObject<any>) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const focusableElements = React.useRef<HTMLElement[]>([]);

  React.useEffect(() => {
    if (ref.current) {
      focusableElements.current = [...ref.current.childNodes].flatMap(
        (child) => child.firstChild as HTMLElement
      );
      focusableElements.current.forEach((element, index) => {
        if (index === activeIndex) {
          element.setAttribute('tabIndex', '0');
        } else {
          element.setAttribute('tabIndex', '-1');
        }
      });
    }
  }, [ref]);

  return {
    activeIndex,
    setActiveIndex,
    focusableElements,
  };
};

interface MenuProps {
  isOpenSubmenu: boolean;
  onOpenSubmenu: (
    submenuIndex: number,
    focusedElement: 'first' | 'last'
  ) => void;
}

export const useMenu = (props: MenuProps) => {
  const { isOpenSubmenu, onOpenSubmenu } = props;
  const menuRef = React.useRef<HTMLUListElement>(null);
  const { activeIndex, setActiveIndex, focusableElements } =
    useRovingTabindex(menuRef);

  const handleKeydown = (event: globalThis.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
        const nextIndex = (activeIndex + 1) % focusableElements.current.length;
        focusableElements.current[nextIndex].focus();
        setActiveIndex(nextIndex);
        break;
      case 'ArrowLeft':
        const previousIndex =
          Math.abs(activeIndex - 1) % focusableElements.current.length;
        focusableElements.current[previousIndex].focus();
        setActiveIndex(previousIndex);
        break;
      case 'ArrowDown':
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
      document.addEventListener('keydown', handleKeydown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeydown);
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

export const useSubmenu = () => {
  const submenuRef = React.useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const { activeIndex, setActiveIndex, focusableElements } =
    useRovingTabindex(submenuRef);

  const handleSetIsOpen = (
    value: boolean,
    focusedElement?: 'first' | 'last'
  ) => {
    if (value) {
      if (focusedElement === 'first') {
        focusableElements.current[0].focus();
        setActiveIndex(0);
      } else if (focusedElement === 'last') {
        const lastIndex = focusableElements.current.length - 1;
        focusableElements.current[lastIndex].focus();
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
        focusableElements.current[nextIndex].focus();
        setActiveIndex(nextIndex);
        break;
      case 'ArrowUp':
        const previousIndex =
          Math.abs(activeIndex - 1) % focusableElements.current.length;
        focusableElements.current[previousIndex].focus();
        setActiveIndex(previousIndex);
        break;
      case 'ArrowRight':
        handleSetIsOpen(false);
        break;
      case 'ArrowLeft':
        handleSetIsOpen(false);
        break;
      case 'Escape':
        setActiveIndex(0);
        handleSetIsOpen(false);
        break;
    }
  };

  React.useEffect(() => {
    if (submenuRef.current) {
      document.addEventListener('keydown', handleKeydown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [submenuRef, activeIndex]);

  return {
    submenuRef,
    isOpen,
    setIsOpen: handleSetIsOpen,
  };
};
