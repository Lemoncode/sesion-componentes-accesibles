# Menu

_./src/component.tsx_

```diff
import React from 'react';
import { cx } from '@emotion/css';
import { useMenu } from './component.hooks';
import logo from './lemoncode-logo.svg';
import * as classes from './component.styles';

export const Menu: React.FC = () => {
  const { menuRef, isOpen, setIsOpen } = useMenu();

  return (
    <div className={cx(classes.root)}>
      <img className={classes.logo} src={logo} />
      <button className={classes.menuButton} onClick={() => setIsOpen(true)}>
        <i className="material-icons">menu</i>
      </button>
      <ul ref={menuRef} className={cx(classes.menu, { open: isOpen })}>
        <li>User profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

```


## References

[WAI_ARIA - Menu](https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-navigation.html)
