import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './router/MainRouter'
import './styles/styles.scss';


ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
