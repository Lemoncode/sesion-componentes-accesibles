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
  }, [ref.current]);

  const onSetFocusToElement = (element: HTMLElement) => {
    if (element) {
      onRemoveFocus();
      element.setAttribute('tabIndex', '0');
      element.focus();
    }
  };

  return {
    activeIndex,
    setActiveIndex,
    focusableElements,
    onSetFocusToElement,
    onRemoveFocus,
  };
};

export const useMenu = () => {
  const menuRef = React.useRef<HTMLUListElement>(null);
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
    }
  };

  React.useEffect(() => {
    if (menuRef.current) {
      menuRef.current.addEventListener('keydown', handleKeydown);
    }
    return () => {
      menuRef.current?.removeEventListener('keydown', handleKeydown);
    };
  }, [menuRef.current, activeIndex]);

  return { menuRef };
};

interface OutsideElementProps {
  ref: React.MutableRefObject<HTMLElement>;
  onClickOutside: () => void;
}

export const useOutsideElement = (props: OutsideElementProps) => {
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
  }, [ref.current]);
};
