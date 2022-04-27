# Checkbox

Uno de los principales cambios que debemos hacer (esto nos sirve para todos los campos de un formulario que tengan un `label`) es asociar el elemento `label` con el `input` para que cuando el lector lea el `label`, también lea la información del estado de dicho `input`:

_./src/component.tsx_

```diff
import React from 'react';
import { cx } from '@emotion/css';
import checked from './checkbox-checked.png';
import unchecked from './checkbox-unchecked.png';
import * as classes from './component.styles';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<Props> = (props) => {
  const { label, value, onChange } = props;
  return (
-   <label className={classes.root}>
+   <label htmlFor="checkbox-id" className={classes.root}>
      {label}
      <span>
        <input
+         id="checkbox-id"
          className={classes.input}
          type="checkbox"
          checked={value}
          onChange={() => {
            onChange(!value);
          }}
        />
        <span className={classes.imageContainer}>
          {value ? (
            <img className={classes.image} src={checked} />
          ) : (
            <img className={classes.image} src={unchecked} />
          )}
        </span>
      </span>
    </label>
  );
};

```

Además, un punto importante, es que debemos hacer accesible este componente mediante el foco, al tener puesto el input con un `display: none` el poder hacer foco a este elemento, automáticamente se elimina, por tanto debemos "ocultarlo visualmente" y que esté disponible para los `screen readers`:

_./src/component.tsx_

```diff
import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  user-select: none;
`;
+ export const screenReaderOnly = css`
+   position: absolute;
+   left: -10000px;
+   top: auto;
+   width: 1px;
+   height: 1px;
+   overflow: hidden;
+ `;

export const input = css`
- display: none;
+ &:focus + span {
+   border: 1px solid #262626;
+ }
+ &:focus + span:not(.checked) {
+   border: 1px solid #493ba7;
+ }
`;

...

```

_./src/component.tsx_

```diff
...

export const Checkbox: React.FC<Props> = (props) => {
  const { label, value, onChange } = props;
  return (
    <label htmlFor="checkbox-id" className={classes.root}>
      {label}
      <span>
        <input
          id="checkbox-id"
-         className={classes.input}
+         className={cx(classes.screenReaderOnly, classes.input)}
          type="checkbox"
          checked={value}
          onChange={() => {
            onChange(!value);
          }}
        />
-       <span className={classes.imageContainer}>
+       <span
+         aria-hidden="true"
+         className={cx(classes.imageContainer, {
+           checked: value,
+         })}
+       >
          {value ? (
            <img className={classes.image} src={checked} />
          ) : (
            <img className={classes.image} src={unchecked} />
          )}
        </span>
      </span>
    </label>
  );
};

```


## References

- [WAI_ARIA - Checkbox](https://www.w3.org/TR/2021/NOTE-wai-aria-practices-1.2-20211129/examples/checkbox/checkbox.html)

- [MDN - Hiding content](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#hiding_content)
