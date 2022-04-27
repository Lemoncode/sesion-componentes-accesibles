import React from 'react';
import { cx } from '@emotion/css';
import { useElementWidth } from './accessible-tooltip.hooks';
import * as classes from './accessible-tooltip.styles';

interface Props {
  title: string;
}

export const AccessibleTooltip: React.FC<Props> = (props) => {
  const { title, children } = props;
  const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div
      ref={elementRef}
      className={cx(classes.root, {
        [classes.globalTooltipClasses.open]: isOpen,
      })}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
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
