import React, { KeyboardEventHandler } from 'react';
import { useSubmenu, useMenu } from './accessible-menu.hooks';
import logo from '../../../assets/lemoncode-logo.svg';
import * as classes from './accessible-menu.styles';

export const AccessibleMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { menuRef } = useMenu();
  const handleClose = React.useCallback(() => setIsOpen(false), []);
  const { submenuRef } = useSubmenu({
    onClose: handleClose,
  });

  const handleKeydown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <nav aria-label="Lemoncode" className={classes.root}>
      <ul ref={menuRef} className={classes.menubar}>
        <li>
          <button aria-label="Home">
            <img className={classes.logo} src={logo} />
          </button>
        </li>
        <li>
          <button
            aria-label="User settings"
            aria-expanded={isOpen}
            aria-controls="user-settings-submenu"
            className={classes.menuButton}
            onClick={() => {
              console.log({ isOpen });
              setIsOpen(isOpen);
            }}
          >
            <i className="material-icons">menu</i>
          </button>
          {isOpen && (
            <ul
              id="user-settings-submenu"
              aria-label="User settings"
              ref={submenuRef}
              className={classes.submenu}
              onKeyDown={handleKeydown}
            >
              <li>
                <a href="#/menu">User profile</a>
              </li>
              <li>
                <a href="#/menu">Logout</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
