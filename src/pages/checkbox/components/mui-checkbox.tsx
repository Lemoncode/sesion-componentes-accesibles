import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}
export const MuiCheckbox: React.FC<Props> = (props) => {
  const { label, value, onChange } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox value={value} onChange={(_, checked) => onChange(checked)} />
      }
      label={label}
    />
  );
};
