# Menu

Vamos cambiar el elemento `div` de la barra por un `nav`. Esto implica que vamos a convertirla en una barra de navegación donde el logo es un elemento para navegar y el botón menú es un submenu.

_./src/component.tsx_

```diff
...

export const Menu: React.FC = () => {
  const { menuRef, isOpen, setIsOpen } = useMenu();

  return (
-   <div className={classes.root}>
+   <nav aria-label="Lemoncode" className={classes.root}>
+     <ul>
+       <li>
          <a>
            <img className={classes.logo} src={logo} />
          </a>
        </li>
+       <li>
          <button
            className={classes.menuButton}
            onClick={() => setIsOpen(true)}
          >
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
+       </li>
+     </ul>
-   </div>
+   </nav>
  );
};

```

Con el `role="menubar"` indicamos que se trata de un menu que está siempre visible:

_./src/component.tsx_

```diff
...

export const Menu: React.FC = () => {
  const { menuRef, isOpen, setIsOpen } = useMenu();

  return (
    <nav aria-label="Lemoncode" className={classes.root}>
-     <ul>
+     <ul role="menubar">
-       <li>
+       <li role="none">
-         <a>
+         <a tabIndex={0} role="menuitem" aria-label="Home">
            <img className={classes.logo} src={logo} />
          </a>
        </li>
-       <li>
+       <li role="none">
          <button
+           tabIndex={0}
+           role="menuitem"
+           aria-label="User settings"
            className={classes.menuButton}
            onClick={() => setIsOpen(true)}
          >
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
        </li>
      </ul>
    </nav>
  );
};
```

Vamos a actualizar los estilos para que no afecte visualmente los cambios del html:

_./src/component.tsx_

```diff
...
export const Menu: React.FC = () => {
  const { menuRef, isOpen, setIsOpen } = useMenu();

  return (
    <nav aria-label="Lemoncode" className={classes.root}>
-     <ul role="menubar">
+     <ul className={classes.menubar} role="menubar">
        <li role="none">
          <a tabIndex={0} role="menuitem" aria-label="Home">
            <img className={classes.logo} src={logo} />
          </a>
        </li>
        <li role="none">
          <button
            tabIndex={0}
            role="menuitem"
            aria-label="User settings"
            className={classes.menuButton}
            onClick={() => setIsOpen(true)}
          >
            <i className="material-icons">menu</i>
          </button>
-         <ul ref={menuRef} className={cx(classes.menu, { open: isOpen })}>
+         <ul ref={menuRef} className={cx(classes.submenu, { open: isOpen })}>
            <li>
              <a>User profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

```

_./src/component.styles.ts_

```diff
import { css } from '@emotion/css';

export const root = css`
- display: flex;
- flex-direction: row;
- align-items: center;
- justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  padding: 16px 24px;
`;

+ export const menubar = css`
+   list-style: none;
+   display: flex;
+   flex-direction: row;
+   align-items: center;
+   justify-content: space-between;
+ `;

...

- export const menu = css`
+ export const submenu = css`
  display: none;
  position: absolute;
  top: 0;
...

```

Vamos a relacionar el submenú del botón, en este caso utilizando el `role="menu"`, cuyo role se utiliza para los menú que pueden no estar visibles y `aria-haspopup`, `aria-expanded`:

_./src/component.tsx_

```diff
...
export const Menu: React.FC = () => {
  const { menuRef, isOpen, setIsOpen } = useMenu();

  return (
    <nav aria-label="Lemoncode" className={classes.root}>
      <ul className={classes.menubar} role="menubar">
        <li role="none">
          <a tabIndex={0} role="menuitem" aria-label="Home">
            <img className={classes.logo} src={logo} />
          </a>
        </li>
        <li role="none">
          <button
            tabIndex={0}
            role="menuitem"
            aria-label="User settings"
+           aria-haspopup="true"
+           aria-expanded={isOpen}
+           aria-controls="user-settings-submenu"
            className={classes.menuButton}
            onClick={() => setIsOpen(true)}
          >
            <i className="material-icons">menu</i>
          </button>
          <ul
+           id="user-settings-submenu"
+           aria-label="User settings"
+           role="menu"
            ref={menuRef}
            className={cx(classes.submenu, { open: isOpen })}
          >
-           <li>
+           <li role="none">
-             <a>
+             <a tabIndex={0} role="menuitem">
                User profile
              </a>
            </li>
-           <li>
+           <li role="none">
-             <a>
+             <a tabIndex={0} role="menuitem">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

```

Con respecto al foco de los diferentes menus, el estándar define que solamente el primer elemento del menu debe tener el foco mediante la tecla `Tab` y navegar por los diferentes elementos usando las flechas del teclado aplicando [roving tabindex](https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex). Además, si pulsamos la tecla `Escape` poder salir del submenu:

_./src/component.hooks.ts_

```diff
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

```

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
    <nav aria-label="Lemoncode" className={classes.root}>
      <ul className={classes.menubar} role="menubar">
        <li role="none">
          <a tabIndex={0} role="menuitem" aria-label="Home">
            <img className={classes.logo} src={logo} />
          </a>
        </li>
        <li role="none">
          <button
            tabIndex={0}
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
            ref={menuRef}
            className={cx(classes.submenu, { open: isOpen })}
          >
            <li role="none">
              <a tabIndex={0} role="menuitem">
                User profile
              </a>
            </li>
            <li role="none">
              <a tabIndex={0} role="menuitem">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

```

## References

- [WAI_ARIA - Menu](https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-navigation.html)

- [Roving tabindex](https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex)
