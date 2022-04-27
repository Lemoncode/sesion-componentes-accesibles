import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './router';
import './global.styles';

const App: React.FC = () => {
  return <AppRouter />;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
