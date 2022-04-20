import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './component.styles';

interface Props {
  isIcon: boolean;
}

export const Tooltip: React.FunctionComponent<Props> = (props) => {
  const { isIcon, children } = props;

  return (
    <div className={cx(classes.root, { open: isOpen })}>
      <p className={cx(classes.title, { open: isOpen })} onClick={onClick}>
        <span>{title}</span>
        <i className={cx('material-icons', classes.icon, { open: isOpen })}>
          keyboard_arrow_down
        </i>
      </p>
      {isOpen && (
        <div className={cx(classes.body, { open: isOpen })}>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};
