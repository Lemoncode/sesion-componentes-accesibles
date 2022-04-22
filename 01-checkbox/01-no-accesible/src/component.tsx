import React from 'react';
import { cx } from '@emotion/css';
import checked from './checkbox-checked.png';
import unchecked from './checkbox-unchecked.png';
import * as classes from './component.styles';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<Props> = (props) => {
  const { label, value, onChange } = props;
  return (
    <div className={classes.root} onClick={() => onChange(!value)}>
      <label className={classes.label}>{label}</label>
      <input className={classes.input} type="checkbox" defaultChecked={value} />
      <span className={classes.imageContainer}>
        {value ? (
          <img className={classes.image} src={checked} />
        ) : (
          <img className={classes.image} src={unchecked} />
        )}
      </span>
    </div>
  );
};
