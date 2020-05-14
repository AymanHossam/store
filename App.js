import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk';

import Nav from './src/Nav';
import authReducer from './src/store/reducers/authReducer';
import cartReducer from './src/store/reducers/cartReducer';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default function App() {

  return (
    <Provider store={ store }>
      <Nav />
    </Provider>

  );
}
