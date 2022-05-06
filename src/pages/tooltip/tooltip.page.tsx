import React from 'react';
import { IconButton, TextField, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/HelpOutline';
import { Page } from '../../common';
import {
  NonAccessibleTooltip,
  AccessibleTooltip,
  MuiTooltip,
} from './components';
import * as classes from './tooltip.styles';

export const TooltipPage: React.FC = () => {
  return (
    <Page
      exampleTitle="tooltips"
      nonAccessibleComponent={
        <>
          <NonAccessibleTooltip title="Para más información visita lemoncode.net">
            <i style={{ width: 24 }} className="material-icons">
              help_outline
            </i>
          </NonAccessibleTooltip>
          <NonAccessibleTooltip title="Formato español: 8 números y una letra">
            <div className={classes.field}>
              <label htmlFor="no-accessible-tooltip">DNI</label>
              <input id="no-accessible-tooltip" type="text" />
            </div>
          </NonAccessibleTooltip>
        </>
      }
      accessibleComponent={
        <>
          <AccessibleTooltip title="Para más información visita lemoncode.net">
            <i
              aria-hidden={true}
              style={{ width: 24 }}
              className="material-icons"
            >
              help_outline
            </i>
          </AccessibleTooltip>
          <AccessibleTooltip title="Formato español: 8 números y una letra">
            <div className={classes.field}>
              <label htmlFor="accessible-tooltip">DNI</label>
              <input id="accessible-tooltip" type="text" />
            </div>
          </AccessibleTooltip>
        </>
      }
      muiComponent={
        <>
          <MuiTooltip title="Para más información visita lemoncode.net">
            <IconButton>
              <HelpIcon />
            </IconButton>
          </MuiTooltip>
          <MuiTooltip title="Formato español: 8 números y una letra">
            <TextField id="mui-tooltip" label="DNI" />
          </MuiTooltip>
        </>
      }
    />
  );
};
