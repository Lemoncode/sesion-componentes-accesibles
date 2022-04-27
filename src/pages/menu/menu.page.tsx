import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { Page } from '../../common';
import { NonAccessibleMenu, AccessibleMenu, MuiMenu } from './components';

export const MenuPage: React.FC = () => {
  return (
    <Page
      nonAccessibleComponent={<NonAccessibleMenu />}
      accessibleComponent={<AccessibleMenu />}
      muiComponent={
        <StyledEngineProvider injectFirst>
          <MuiMenu />
        </StyledEngineProvider>
      }
    />
  );
};
