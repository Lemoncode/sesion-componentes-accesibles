import React from 'react';
import { cx } from '@emotion/css';
import { useMenu } from './non-accessible-menu.hooks';
import logo from '../../../assets/lemoncode-logo.svg';
import * as classes from './non-accessible-menu.styles';

export const NonAccessibleMenu: React.FC = () => {
  const { menuRef, isOpen, setIsOpen } = useMenu();

  return (
    <div className={classes.root}>
      <a>
        <img className={classes.logo} src={logo} />
      </a>
      <button className={classes.menuButton} onClick={() => setIsOpen(true)}>
        <i className="material-icons">menu</i>
      </button>
      <ul ref={menuRef} className={cx(classes.menu, { open: isOpen })}>
        <li>
          <a>User profile</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};
