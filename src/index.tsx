import React from 'react';
import * as Axe from '@axe-core/react'
import { createRoot } from 'react-dom/client';
import { AppRouter } from './router';
import './global.styles';

const App: React.FC = () => {
  return <AppRouter />;
};

const root = createRoot(document.getElementById('root'));
if (process.env.NODE_ENV !== 'production') {
  Axe.default(React, root, 1000);
}

root.render(<App />);
