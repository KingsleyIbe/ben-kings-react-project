import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './Components/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
