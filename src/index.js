import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App'
import MainMenu from './JSX/MainMenu'

ReactDOM.render(
  <MainMenu />, 
  document.getElementById('root')
);

serviceWorker.unregister();
