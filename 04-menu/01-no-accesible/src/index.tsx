import React from 'react';
import { createRoot } from 'react-dom/client';
import { Menu } from './component';
import './global.styles';

const App: React.FC = () => {
  return <Menu />;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
