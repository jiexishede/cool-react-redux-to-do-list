import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import filter from './modules/filter';
import task from './modules/task';


// initialize logger
const loggerMiddleware = createLogger();

// apply logger to redux
const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore);


const reducer = combineReducers({
  filter,
  task
});


const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);


export default configureStore;