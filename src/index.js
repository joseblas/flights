import React from 'react';
import store from './store.js';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

const render = () => {
  ReactDOM.render(
    <App store={ store } />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
