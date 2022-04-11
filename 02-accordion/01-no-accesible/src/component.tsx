import { cx } from '@emotion/css';
import React from 'react';
import * as classes from './component.styles';

export const Component: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <p
        className={cx(classes.title, { open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Expande este acordeon para más información</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
      </p>
      {isOpen && (
        <div className={classes.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      )}
    </div>
  );
};
