import React from 'react';
import { cx } from '@emotion/css';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import * as classes from './component.styles';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}
export const Checkbox: React.FC<Props> = (props) => {
  const { label, value, onChange } = props;
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          value={value}
          onChange={(_, checked) => onChange(checked)}
        />
      }
      label={label}
    />
  );
};
