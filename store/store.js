import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import product from './reducers/product';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({product});

const store = configureStore({reducer: {rootReducers}}, applyMiddleware(thunk));

export default store;
