# Tooltip

Lo primero, para que este componente sea accesible, debemos hacer que el elemento pueda obtener el foco:

_./src/component.tsx_

```diff
...

export const Tooltip: React.FC<Props> = (props) => {
  const { title, children } = props;
  const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();

  return (
-   <div ref={elementRef} className={cx(classes.root)}>
+   <div ref={elementRef} className={cx(classes.root)} tabIndex={0}>
      {children}
      <div
        className={cx(
          classes.tooltip({ rootWidth: elementWidth }),
          classes.globalTooltipClasses.tooltip
        )}
      >
        {title}
      </div>
    </div>
  );
};
```

Por tanto, los estilos para que se muestre el tooltip deben darle visibilidad en el evento `focus`:


_./src/component.styles.ts_

```diff
...
export const root = css`
  position: relative;
  cursor: pointer;

- &:hover {
+ &:hover, &:focus {
    .${globalTooltipClasses.tooltip} {
      visibility: visible;
    }
  }
`;
...
```

El tooltip es un texto contextual que muestra la descripción del elemento, por tanto deberíamos ocultar el elemento en sí, sobre todo si es un elemento visual:

_./src/component.tsx_

```diff
...

export const Tooltip: React.FC<Props> = (props) => {
  const { title, children } = props;
  const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();

  return (
    <div ref={elementRef} className={cx(classes.root)} tabIndex={0}>
-     {children}
+     <span aria-hidden={true}>{children}</span>
      <div
        className={cx(
          classes.tooltip({ rootWidth: elementWidth }),
          classes.globalTooltipClasses.tooltip
        )}
      >
        {title}
      </div>
    </div>
  );
};
```

El texto del tooltip debe tener dicho role:

_./src/component.tsx_

```diff
...
export const Tooltip: React.FC<Props> = (props) => {
  const { title, children } = props;
  const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();

  return (
    <div ref={elementRef} className={cx(classes.root)} tabIndex={0}>
      <span aria-hidden={true}>{children}</span>
      <div
+       role="tooltip"
        className={cx(
          classes.tooltip({ rootWidth: elementWidth }),
          classes.globalTooltipClasses.tooltip
        )}
      >
        {title}
      </div>
    </div>
  );
};
```

Por útlimo, el estándar también define, que cuando se pulse la tecla `Escape` debe de ocultarse:

_./src/component.tsx_

```diff
...
export const Tooltip: React.FC<Props> = (props) => {
  const { title, children } = props;
  const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();
+ const [isOpen, setIsOpen] = React.useState(false);

+ const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
+   if (event.key === 'Escape') {
+     setIsOpen(false);
+   }
+ };

+ const handleFocus = () => {
+   setIsOpen(true);
+ };

+ const handleBlur = () => {
+   setIsOpen(false);
+ };

  return (
    <div
      ref={elementRef}
-     className={cx(classes.root)}
+     className={cx(classes.root, {
+       [classes.globalTooltipClasses.open]: isOpen,
+     })}
      tabIndex={0}
+     onKeyDown={handleKeyDown}
+     onFocus={handleFocus}
+     onBlur={handleBlur}
    >
      <span aria-hidden={true}>{children}</span>
      <div
        role="tooltip"
        className={cx(
          classes.tooltip({ rootWidth: elementWidth }),
          classes.globalTooltipClasses.tooltip
        )}
      >
        {title}
      </div>
    </div>
  );
};
```

_./src/component.styles.ts_

```diff
import { css } from '@emotion/css';

export const globalTooltipClasses = {
  tooltip: 'Tooltip-tooltip',
+ open: 'Tooltip-open',
};

export const root = css`
  position: relative;
  cursor: pointer;

- &:hover, &:focus {
+ &:hover, &.${globalTooltipClasses.open} {
    .${globalTooltipClasses.tooltip} {
      visibility: visible;
    }
  }
`;
...

```

## References

- [Tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)

- [WAI_ARIA - Tooltip](https://www.w3.org/TR/wai-aria-practices/#tooltip)

- [Tooltip role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
