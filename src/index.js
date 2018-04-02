import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducers from './reducers/index';

firebase.initializeApp({
  apiKey: "AIzaSyAW28cTFKwqAtfxDLqaz1iOFL0g9IWRCBM",
  authDomain: "redbus-f97f5.firebaseapp.com",
  databaseURL: "https://redbus-f97f5.firebaseio.com",
  projectId: "redbus-f97f5",
  storageBucket: "redbus-f97f5.appspot.com",
  messagingSenderId: "727288573990"
})


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));

