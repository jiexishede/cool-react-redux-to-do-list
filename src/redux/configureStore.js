import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import filter from './modules/filter';


const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
  filter
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);


export default configureStore;