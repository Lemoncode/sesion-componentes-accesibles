import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { Helmet } from "react-helmet";
import { Navbar } from './navbar.component';
import * as commonClasses from './common.styles';
import * as classes from './page.styles';

interface Props {
  exampleTitle: string;
  nonAccessibleComponent: React.ReactNode;
  accessibleComponent: React.ReactNode;
  muiComponent?: React.ReactNode;
}

export const Page: React.FC<Props> = (props) => {
  const { exampleTitle, nonAccessibleComponent, accessibleComponent, muiComponent } = props;
  const focusHeading = React.useRef<HTMLHeadingElement>();
  
  React.useEffect(() => {
    if (focusHeading.current) {
      console.log("¡vamos a focalizar!");
      focusHeading.current.focus();
    }
  }, [focusHeading]);

  return (
    <StyledEngineProvider injectFirst>
      <Helmet>
        <title>{exampleTitle} - Componentes accesibles</title>
      </Helmet>
      <div className={classes.root}>
        <header>
          <h1 className={commonClasses.screenReaderOnly}>
            Sesión componentes accesibles
          </h1>
          <Navbar />
        </header>
        <main>
          <h2 tabIndex={-1}  ref={focusHeading}>Ejemplos de {exampleTitle}</h2>
          <h3 className={commonClasses.screenReaderOnly}>Componente no accesible</h3>
          <span>{nonAccessibleComponent}</span>
          <h3 className={commonClasses.screenReaderOnly}>Componente accesible</h3>
          <span>{accessibleComponent}</span>
          {muiComponent && (
            <>
              <h3 className={commonClasses.screenReaderOnly}>componente con material-ui"</h3>
              <span>{muiComponent}</span>
            </>
          )}
        </main>
      </div>
    </StyledEngineProvider>
  );
};
