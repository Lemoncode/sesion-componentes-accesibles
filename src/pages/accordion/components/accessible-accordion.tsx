import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './accessible-accordion.styles';

interface Props {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

export const AccessibleAccordion: React.FC<Props> = (props) => {
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
          aria-hidden="true"
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
