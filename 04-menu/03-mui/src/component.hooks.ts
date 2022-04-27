import React from 'react';

export const useMenu = () => {
  const [menuElement, setMenuElement] = React.useState<Element>(null);

  const onOpen = event => {
    setMenuElement(event.currentTarget);
  };

  const onClose = () => {
    setMenuElement(null);
  };

  return {
    isOpen: Boolean(menuElement),
    menuElement,
    onOpen,
    onClose,
  };
};
