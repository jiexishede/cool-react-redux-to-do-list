import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ToDoContainer from './containers/ToDoContainer'
import configureStore from './redux/configureStore';

import './asset/style/normalize.css';

const store = configureStore();

injectTapEventPlugin();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ToDoContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('to-do')
);

module.hot.accept();