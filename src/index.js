import React from 'react';
import store from './store.js';
import ReactDOM from 'react-dom';
import Application from './Application';
import './css/index.css';

const render = () => {
  ReactDOM.render(
    <Application store={ store } />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
