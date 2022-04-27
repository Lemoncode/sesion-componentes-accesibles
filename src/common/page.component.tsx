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
            <span tabIndex={0} aria-label="Sección componente no accesible" />
            {nonAccessibleComponent}
          </h3>
          <h3>
            <span tabIndex={0} aria-label="Sección componente accesible" />
            {accessibleComponent}
          </h3>
          {muiComponent && (
            <h3>
              <span
                tabIndex={0}
                aria-label="Sección componente con material-ui"
              />
              {muiComponent}
            </h3>
          )}
        </main>
      </div>
    </StyledEngineProvider>
  );
};
