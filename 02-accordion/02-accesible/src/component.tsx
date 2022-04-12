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
          aria-hidden="true"
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
          <p>Este acordeon si es accesible</p>
        </div>
      )}
    </div>
  );
};
