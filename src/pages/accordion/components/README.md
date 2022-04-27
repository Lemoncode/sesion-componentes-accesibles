# Accordion

Al ser un elemento `clickable` necesitamos que sea un `button` (o en su defecto que tenga ese role)

_./src/component.tsx_

```diff
import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

interface Props {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
}

export const Accordion: React.FC<Props> = (props) => {
  const { title, body, isOpen, onClick } = props;

  return (
    <div className={cx(classes.root, { open: isOpen })}>
-     <p
+     <button
        className={cx(classes.title, { open: isOpen })}
        onClick={onClick}
      >
        <span>{title}</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
-     </p>
+     </button>
      {isOpen && (
        <div className={cx(classes.body, { open: isOpen })}>
          <p>{body}</p>
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

Ahora utilizamos las propiedades `aria-expanded` para describir el estado del acordeón (expandido o colapsado):

_./src/component.tsx_

```diff
import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

interface Props {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
}

export const Accordion: React.FC<Props> = (props) => {
  const { title, body, isOpen, onClick } = props;

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <button
        className={cx(classes.title, { open: isOpen })}
        onClick={onClick}
+       aria-expanded={isOpen}
      >
        <span>{title}</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
      </button>
      {isOpen && (
        <div className={cx(classes.body, { open: isOpen })}>
          <p>{body}</p>
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

interface Props {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
+ id: string;
}

export const Accordion: React.FC<Props> = (props) => {
  const { title, body, isOpen, onClick } = props;
+ const { title, body, isOpen, onClick, id } = props;

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <button
        className={cx(classes.title, { open: isOpen })}
        onClick={onClick}
        aria-expanded={isOpen}
+       id={`title-${id}`}
+       aria-controls={`body-${id}`}
      >
        <span>{title}</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
      </button>
      {isOpen && (
        <div
+         id={`body-${id}`}
+         role="region"
+         aria-labelledby={`title-${id}`}
          className={cx(classes.body, { open: isOpen })}
        >
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

```

_./src/index.tsx_

```diff
...

      <Accordion
        title="Máster Front End"
        body="Hoy en día trabajamos con multitud de dispositivos y navegadores, las exigencias de una interfaz de usuario web son muy altas. El área de Front End está evolucionando a pasos agigantados, convirtiéndose en el sector estrella en el mundo del desarrollo."
        isOpen={accordionOpen['master-frontend']}
        onClick={handleClick('master-frontend')}
+       id="master-frontend"
      />
      <Accordion
        title="Bootcamp Backend"
        body="¿Te has planteado alguna vez hacerte desarrollador Backend? En este Bootcamp aprenderás a desarrollar un backend de principio a fin, desde la fase de toma de requerimientos, modelado y definición de base de datos y API, así como su desarrollo, manejo de ORMs, testing y por último como llevarlo a producción desplegándolo en la nube."
        isOpen={accordionOpen['bootcamp-backend']}
        onClick={handleClick('bootcamp-backend')}
+       id="bootcamp-backend"
      />
      <Accordion
        title="Bootcamp Devops"
        body="La automatización de procesos ha pasado de ser una funcionalidad deseable a una necesidad indispensable. Hoy en día esperamos que nuestras aplicaciones liberen nuevas funcionalidades sin apenas interrupción del servicio…"
        isOpen={accordionOpen['bootcamp-devops']}
        onClick={handleClick('bootcamp-devops')}
+       id="bootcamp-devops"
      />
      <Accordion
        title="Bootcamp JavaScript"
        body="Aprende a programar desde cero. Si eres diseñador y siempre te ha picado meterte o entender bien lo que se hace con JavaScript, o si llevas tiempo alejado de la programación y tienes ganas de reengancharte, sigue leyendo…"
        isOpen={accordionOpen['bootcamp-javascript']}
        onClick={handleClick('bootcamp-javascript')}
+       id="bootcamp-javascript"
      />
...
```

Por último, para que no esté todo el rato nombrando el nombre del icono podemos "ocultarlo":

_./src/component.tsx_

```diff
import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

interface Props {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

export const Accordion: React.FC<Props> = (props) => {
  const { title, body, isOpen, onClick } = props;
  const { title, body, isOpen, onClick, id } = props;

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <button
        className={cx(classes.title, { open: isOpen })}
        onClick={onClick}
        aria-expanded={isOpen}
        id={`title-${id}`}
        aria-controls={`body-${id}`}
      >
        <span>{title}</span>
        <i
+         aria-hidden="true"
          className={cx('material-icons', classes.icon, { open: isOpen })}
        >
          keyboard_arrow_down
        </i>
      </button>
      {isOpen && (
        <div
          id={`body-${id}`}
          role="region"
          aria-labelledby={`title-${id}`}
          className={cx(classes.body, { open: isOpen })}
        >
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

```

## References

[WAI_ARIA - Accordion](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html)
