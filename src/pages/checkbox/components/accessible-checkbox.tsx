import React from 'react';
import { cx } from '@emotion/css';
import checked from '../../../assets/checkbox-checked.png';
import unchecked from '../../../assets/checkbox-unchecked.png';
import * as classes from './accessible-checkbox.styles';

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const AccessibleCheckbox: React.FC<Props> = (props) => {
  const { label, value, onChange } = props;
  return (
    <label htmlFor="checkbox-id" className={classes.root}>
      {label}
      <span>
        <input
          id="checkbox-id"
          className={cx(classes.screenReaderOnly, classes.input)}
          type="checkbox"
          checked={value}
          onChange={() => {
            onChange(!value);
          }}
        />
        <span
          aria-hidden="true"
          className={cx(classes.imageContainer, {
            checked: value,
          })}
        >
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
