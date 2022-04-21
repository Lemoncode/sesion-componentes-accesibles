import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Menu } from './component';
import './global.styles';

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Menu />
    </StyledEngineProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
