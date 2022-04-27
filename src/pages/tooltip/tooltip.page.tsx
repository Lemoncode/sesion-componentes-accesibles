import React from 'react';
import { IconButton, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/HelpOutline';
import { Page } from '../../common';
import { NonAccessibleTooltip, AccessibleTooltip, MuiTooltip } from './components';

export const TooltipPage: React.FC = () => {
  return (
    <Page
      nonAccessibleComponent={
        <>
          <NonAccessibleTooltip title="Para más información visita lemoncode.net">
            <i style={{ width: 24 }} className="material-icons">
              help_outline
            </i>
          </NonAccessibleTooltip>
          <NonAccessibleTooltip title="Y para vídeos cortos lemoncode.tv">
            <span style={{ borderBottom: '1px solid black' }}>
              Más información
            </span>
          </NonAccessibleTooltip>
        </>
      }
      accessibleComponent={
        <>
          <AccessibleTooltip title="Para más información visita lemoncode.net">
            <i style={{ width: 24 }} className="material-icons">
              help_outline
            </i>
          </AccessibleTooltip>
          <AccessibleTooltip title="Y para vídeos cortos lemoncode.tv">
            <span style={{ borderBottom: '1px solid black' }}>
              Más información
            </span>
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
          <MuiTooltip title="Y para vídeos cortos lemoncode.tv">
            <Typography
              style={{ borderBottom: '1px solid black' }}
              tabIndex={0}
            >
              Más información
            </Typography>
          </MuiTooltip>
        </>
      }
    />
  );
};
