import React from 'react';
import { cx } from '@emotion/css';
import { useSubmenu, useMenu } from './accessible-menu.hooks';
import logo from '../../../assets/lemoncode-logo.svg';
import * as classes from './accessible-menu.styles';

export const AccessibleMenu: React.FC = () => {
  const menuRef = React.useRef<HTMLUListElement>(null);
  const submenuRef = React.useRef<HTMLUListElement>(null);
  const { isOpen, setIsOpen } = useSubmenu({ menuRef, submenuRef });
  useMenu({
    menuRef,
    onOpenSubmenu: (submenuIndex, focusedElement) => {
      if (submenuIndex === 1) {
        setIsOpen(true, focusedElement);
      }
    },
  });

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
            onClick={() => setIsOpen(true)}
          >
            <i className="material-icons">menu</i>
          </button>
          <ul
            id="user-settings-submenu"
            aria-label="User settings"
            ref={submenuRef}
            className={cx(classes.submenu, { open: isOpen })}
          >
            <li>
              <a>User profile</a>
            </li>
            <li role="none">
              <a>Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
