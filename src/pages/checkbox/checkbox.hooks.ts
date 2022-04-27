import React from 'react';

export const useCheckbox = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    setFormValues({
      checkbox: isChecked,
    });
  };

  return {
    isChecked,
    setIsChecked,
    formValues,
    onSubmit,
  };
};
