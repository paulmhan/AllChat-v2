import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import socketMiddleware from "./reduxMiddlewares";
import App from './containers/App';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
// 1st param is our reducers
// 2nd param is any preloaded state we want
// 3rd param is any middlwares we want applied to redux
const store = createStore(
  reducers,
  //set this as default state because it would go away on refresh because the only routes to get tokens is on sign in and signup
  //so once you sign in, it goes to local storage which will stay even if you refresh
  { auth: { authenticated: localStorage.getItem('token')}},
  composeEnhancers(applyMiddleware(socketMiddleware(), reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));
