import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '@mui/material';
import { Checkbox } from './component';
import './global.styles';

const App: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    setFormValues({
      checkbox: isChecked,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Checkbox
          label="Acepto los términos y condiciones"
          value={isChecked}
          onChange={setIsChecked}
        />
        <Button type="submit" variant="contained">
          Guardar
        </Button>
      </form>
      <p role="alert">Form values: {JSON.stringify(formValues, null, 2)}</p>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
