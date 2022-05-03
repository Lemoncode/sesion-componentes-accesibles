import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { Navbar } from './navbar.component';
import * as commonClasses from './common.styles';
import * as classes from './page.styles';

interface Props {
  nonAccessibleComponent: React.ReactNode;
  accessibleComponent: React.ReactNode;
  muiComponent?: React.ReactNode;
}

export const Page: React.FC<Props> = (props) => {
  const { nonAccessibleComponent, accessibleComponent, muiComponent } = props;

  return (
    <StyledEngineProvider injectFirst>
      <div className={classes.root}>
        <header>
          <h1 className={commonClasses.screenReaderOnly}>
            Sesión componentes accesibles
          </h1>
          <Navbar />
        </header>
        <main>
          <h3>
            <span aria-label="Componente no accesible" />
          </h3>
          {nonAccessibleComponent}
          <h3>
            <span aria-label="Componente accesible" />
          </h3>
          {accessibleComponent}
          {muiComponent && (
            <div>
            <h3>
              <span aria-label="componente con material-ui" />
            </h3>
            {muiComponent}
            </div>
          )}
        </main>
      </div>
    </StyledEngineProvider>
  );
};