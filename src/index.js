import React from 'react';
import store from './store.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './Application';
import './css/base.css';

ReactDOM.render(
  <Provider store={ store }>
    <Application />
  </Provider>,
  document.getElementById('root')
);
