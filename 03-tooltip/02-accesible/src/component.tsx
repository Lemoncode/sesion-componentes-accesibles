import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './component.styles';
import { useElementWidth } from './component.hooks';

interface Props {
  title: string;
}

export const Tooltip: React.FC<Props> = (props) => {
  const { title, children } = props;
  const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();

  return (
    <div ref={elementRef} className={cx(classes.root)}>
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
