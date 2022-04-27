import React from 'react';
import { createRoot } from 'react-dom/client';
import { IconButton, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from './component';
import './global.styles';

const App: React.FC = () => {
  return (
    <>
      <Tooltip
        title="Para más información visita lemoncode.net"
      >
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Y para vídeos cortos lemoncode.tv">
        <Typography style={{ borderBottom: '1px solid black' }} tabIndex={0}>
          Más información
        </Typography>
      </Tooltip>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
