import React from 'react';
import checked from '../../../assets/checkbox-checked.png';
import unchecked from '../../../assets/checkbox-unchecked.png';
import * as classes from './non-accessible-checkbox.styles';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const NonAccessibleCheckbox: React.FC<Props> = (props) => {
  const { label, value, onChange } = props;
  return (
    <label className={classes.root}>
      {label}
      <span>
        <input
          className={classes.input}
          type="checkbox"
          checked={value}
          onChange={() => {
            onChange(!value);
          }}
        />
        <span className={classes.imageContainer}>
          {value ? (
            <img className={classes.image} src={checked} />
          ) : (
            <img className={classes.image} src={unchecked} />
          )}
        </span>
      </span>
    </label>
  );
};
