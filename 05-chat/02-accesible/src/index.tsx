import React from 'react';
import { createRoot } from 'react-dom/client';
import { Chat } from './component';
import './global.styles';

const App: React.FC = () => {
  return <Chat />;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />)
