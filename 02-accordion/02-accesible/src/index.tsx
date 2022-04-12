import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from './component';
import './global.styles';

const App: React.FC = () => {
  return <Component />;
};

ReactDOM.render(<App />, document.getElementById('root'));
