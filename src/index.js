import React from 'react';
import ReactDOM from 'react-dom';
// import App from './containers/smartlogin';
// import store from './store/store';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux"
import { connect } from 'react-redux';
import App from './containers/App';
import allReducer from './reducers/index'

export const setName = (name)=>{
    return{
      type: "SETNAME",
      payload: name
    }
  }

export const setAge = () => {
  return {
    type: 'SETAGE'
  }
}

const store = createStore(allReducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
