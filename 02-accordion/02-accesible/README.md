# Accordion

Al ser un elemento `clickable` necesitamos que sea un `button` (o en su defecto que tenga ese role)

_./src/component.tsx_

```diff
import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

export const Component: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cx(classes.root, { open: isOpen })}>
-     <p
+     <button
        className={cx(classes.title, { open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Expande este acordeon para más información</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
-     </p>
+     </button>
      {isOpen && (
        <div className={cx(classes.body, { open: isOpen })}>
          <p>Este acordeon no es nada accesible</p>
        </div>
      )}
    </div>
  );
};

```

Con este cambio necesitamos actualizar los estilos, ya que el navegador le da unos predeterminados:

_./src/component.styles.ts_

```diff
...

export const title = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  cursor: pointer;
  user-select: none;
+ border: none;
+ background-color: transparent;
+ font-size: 1rem;
+ width: 100%;

  &.open {
    padding-bottom: 1rem;
  }
`;
...
```

Ahora utilizamos las propiedades `aria` para describir el estado del acordeón (expandido o colapsado):

_./src/component.tsx_

```diff
import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

export const Component: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <button
        className={cx(classes.title, { open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
+       aria-expanded={isOpen}
      >
        <span>Expande este acordeon para más información</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
      </button>
      {isOpen && (
        <div className={cx(classes.body, { open: isOpen })}>
          <p>Este acordeon no es nada accesible</p>
        </div>
      )}
    </div>
  );
};

```

Identificamos con IDs las 2 secciones:
 - Para indicar que el título controla el body (`aria-controls="body"`)
 - Para definir el nombre accesible de la region y referencia al botón que expande y collapsa dicha región (`role="region"` y `aria-labelledby="title"`)

_./src/component.tsx_

```diff
import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

export const Component: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <button
        className={cx(classes.title, { open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
+       id="title"
+       aria-controls="body"
      >
        <span>Expande este acordeon para más información</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
      </button>
      {isOpen && (
        <div
+         id="body"
+         role="region"
+         aria-labelledby="title"
          className={cx(classes.body, { open: isOpen })}
        >
          <p>Este acordeon no es nada accesible</p>
        </div>
      )}
    </div>
  );
};

```

Por último, para que no esté todo el rato nombrando el nombre del icono podemos "ocultarlo":

_./src/component.tsx_

```diff
import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

export const Component: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <button
        className={cx(classes.title, { open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        id="title"
        aria-controls="body"
      >
        <span>Expande este acordeon para más información</span>
        <i
+         aria-hidden="true"
          className={cx('material-icons', classes.icon, { open: isOpen })}
        >
          keyboard_arrow_down
        </i>
      </button>
      {isOpen && (
        <div
          id="body"
          role="region"
          aria-labelledby="title"
          className={cx(classes.body, { open: isOpen })}
        >
          <p>Este acordeon no es nada accesible</p>
        </div>
      )}
    </div>
  );
};

```

## References

[WAI_ARIA - Accordion](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html)
