import React from 'react';
import { Page } from '../../common';
import { Button } from '@mui/material';
import { useCheckbox } from './checkbox.hooks';
import {
  NonAccessibleCheckbox,
  AccessibleCheckbox,
  MuiCheckbox,
} from './components';
import * as classes from './checkbox.styles';

export const CheckboxPage: React.FC = () => {
  const nonAccessible = useCheckbox();
  const accessible = useCheckbox();
  const mui = useCheckbox();

  return (
    <Page
      exampleTitle='checkboxes'
      nonAccessibleComponent={
        <form className={classes.root} onSubmit={nonAccessible.onSubmit}>
          <NonAccessibleCheckbox
            label="Acepto los términos y condiciones"
            value={nonAccessible.isChecked}
            onChange={nonAccessible.setIsChecked}
          />
          <button type="submit">Guardar</button>
          <p role="alert">
            Form values: {JSON.stringify(nonAccessible.formValues, null, 2)}
          </p>
        </form>
      }
      accessibleComponent={
        <form className={classes.root} onSubmit={accessible.onSubmit}>
          <AccessibleCheckbox
            label="Acepto los términos y condiciones"
            value={accessible.isChecked}
            onChange={accessible.setIsChecked}
          />
          <button type="submit">Guardar</button>
          <p role="alert">
            Form values: {JSON.stringify(accessible.formValues, null, 2)}
          </p>
        </form>
      }
      muiComponent={
        <form className={classes.root} onSubmit={mui.onSubmit}>
          <MuiCheckbox
            label="Acepto los términos y condiciones"
            value={mui.isChecked}
            onChange={mui.setIsChecked}
          />
          <Button type="submit" variant="contained">
            Guardar
          </Button>
          <p role="alert">
            Form values: {JSON.stringify(mui.formValues, null, 2)}
          </p>
        </form>
      }
    />
  );
};
