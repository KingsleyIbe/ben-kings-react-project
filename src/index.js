import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './component/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
