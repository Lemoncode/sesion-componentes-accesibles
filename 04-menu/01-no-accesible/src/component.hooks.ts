import React from 'react';

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

export const useMenu = () => {
  const menuRef = React.useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  useOutsideElement({
    ref: menuRef,
    onClickOutside: () => {
      setIsOpen(false);
    },
  });

  return {
    menuRef,
    isOpen,
    setIsOpen,
  };
};
