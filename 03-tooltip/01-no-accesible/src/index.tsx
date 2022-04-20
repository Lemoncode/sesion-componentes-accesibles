import React from 'react';
import { createRoot } from 'react-dom/client';
import { Tooltip } from './component';
import './global.styles';

const App: React.FC = () => {
  return (
    <>
      <Tooltip title="Para más información visita lemoncode.net">
        <i style={{ width: 24 }} className="material-icons">
          help_outline
        </i>
      </Tooltip>
      <Tooltip title="Y para vídeos cortos lemoncode.tv">
        <span style={{ borderBottom: '1px solid black' }}>Más información</span>
      </Tooltip>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
