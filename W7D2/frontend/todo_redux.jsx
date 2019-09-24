import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { applyMiddleware } from 'redux'
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState); 
// store.dispatch = addLoggingToDispatch(store);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = store => next => action => {
//   console.log('State pre-dispatch:', store.getState());
//   let result = next(action) 
//   console.log('State post-dispatch:', store.getState());
//   return result 
// };  

const addLoggingToDispatch = store => next => action => {
  console.log('State pre-dispatch:', store.getState());
  let result = next(action) 
  console.log('State post-dispatch:', store.getState());
  return result 
};  

const applyMiddlewares = (store, ...middlewares) => { // create array of middlewares 
    let dispatch = store.dispatch;  
    middlewares.forEach((middleware) => { // iterate through each midldleware and run middleware along with store. 
      dispatch = middleware(store)(dispatch);
    });
    return Object.assign({}, store, { dispatch });
  };