import React from 'react';
import { useSubmenu, useMenu } from './accessible-menu.hooks';
import logo from '../../../assets/lemoncode-logo.svg';
import * as classes from './accessible-menu.styles';

export const AccessibleMenu: React.FC = () => {
  const menuRef = React.useRef<HTMLUListElement>(null);
  const submenuRef = React.useRef<HTMLUListElement>(null);
  const { isOpen, setIsOpen } = useSubmenu({ submenuRef });
  useMenu({
    menuRef,
    onOpenSubmenu: (submenuIndex) => {
      if (submenuIndex === 1) {
        setIsOpen(true);
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
            onClick={() => {
              console.log({isOpen})
              setIsOpen(!isOpen);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setIsOpen(!isOpen);
              }
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
