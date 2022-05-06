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
          <div className={classes.personalData}>
            <p>Datos personales</p>
            <NonAccessibleTooltip title="Los necesitamos para emitir la factura">
              <i style={{ width: 24 }} className="material-icons">
                help_outline
              </i>
            </NonAccessibleTooltip>
          </div>
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
          <div className={classes.personalData}>
            <p>Datos personales</p>
            <AccessibleTooltip title="Los necesitamos para emitir la factura">
              <i
                aria-hidden={true}
                style={{ width: 24 }}
                className="material-icons"
              >
                help_outline
              </i>
            </AccessibleTooltip>
          </div>
          <AccessibleTooltip
            title="Formato español: 8 números y una letra"
            id="input-tooltip"
          >
            <div className={classes.field}>
              <label htmlFor="accessible-tooltip">DNI</label>
              <input
                id="accessible-tooltip"
                aria-describedby="input-tooltip"
                type="text"
              />
            </div>
          </AccessibleTooltip>
        </>
      }
      muiComponent={
        <>
          <div className={classes.personalData}>
            <p>Datos personales</p>
            <MuiTooltip title="Los necesitamos para emitir la factura">
              <IconButton>
                <HelpIcon />
              </IconButton>
            </MuiTooltip>
          </div>
          <MuiTooltip
            title="Formato español: 8 números y una letra"
            id="input-mui-tooltip"
          >
            <TextField
              id="mui-tooltip"
              label="DNI"
              inputProps={{
                'aria-describedby': 'input-mui-tooltip',
              }}
            />
          </MuiTooltip>
        </>
      }
    />
  );
};
