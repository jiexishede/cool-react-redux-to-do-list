import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ToDoContainer from './containers/ToDoContainer'
import configureStore from './redux/configureStore';
import './asset/style/normalize.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ToDoContainer />
  </Provider>,
  document.getElementById('to-do')
);

module.hot.accept();