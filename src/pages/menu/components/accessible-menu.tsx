import React from 'react';
import { cx } from '@emotion/css';
import { useSubmenu, useMenu } from './accessible-menu.hooks';
import logo from '../../../assets/lemoncode-logo.svg';
import * as classes from './accessible-menu.styles';

export const AccessibleMenu: React.FC = () => {
  const { submenuRef, isOpen, setIsOpen } = useSubmenu();
  const { menuRef } = useMenu({
    isOpenSubmenu: isOpen,
    onOpenSubmenu: (submenuIndex, focusedElement) => {
      if (submenuIndex === 1) {
        setIsOpen(true, focusedElement);
      }
    },
  });

  return (
    <nav aria-label="Lemoncode" className={classes.root}>
      <ul ref={menuRef} className={classes.menubar} role="menubar">
        <li role="none">
          <a role="menuitem" aria-label="Home">
            <img className={classes.logo} src={logo} />
          </a>
        </li>
        <li role="none">
          <button
            tabIndex={-1}
            role="menuitem"
            aria-label="User settings"
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-controls="user-settings-submenu"
            className={classes.menuButton}
            onClick={() => setIsOpen(true)}
          >
            <i className="material-icons">menu</i>
          </button>
          <ul
            id="user-settings-submenu"
            aria-label="User settings"
            role="menu"
            ref={submenuRef}
            className={cx(classes.submenu, { open: isOpen })}
          >
            <li role="none">
              <a role="menuitem">User profile</a>
            </li>
            <li role="none">
              <a role="menuitem">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
