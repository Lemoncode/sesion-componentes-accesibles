import React from 'react';

const createEmptyState = () => ({
  'master-frontend': false,
  'bootcamp-backend': false,
  'bootcamp-devops': false,
  'bootcamp-javascript': false,
});

export const useAccordion = () => {
  const [accordionOpen, setAccordioOpen] = React.useState(createEmptyState());

  const onClick = (accordion: string) => () => {
    setAccordioOpen({
      ...createEmptyState(),
      [accordion]: !accordionOpen[accordion],
    });
  };

  return {
    accordionOpen,
    onClick,
  };
};
