import React from 'react';
import { cx } from '@emotion/css';
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
