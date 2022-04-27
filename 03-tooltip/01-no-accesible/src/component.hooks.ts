import React from 'react';

export const useElementWidth = <Element extends HTMLElement>() => {
  const elementRef = React.useRef<Element>(null);
  const [elementWidth, setElementWidth] = React.useState(0);

  React.useEffect(() => {
    if (elementRef.current) {
      setElementWidth(elementRef.current.clientWidth);
    }
  }, [elementRef.current?.clientWidth]);

  return {
    elementRef,
    elementWidth,
  };
};
