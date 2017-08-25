import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import AsyncRoute from './AsyncRoute';

import '@/styles/main';

if(env === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact route="/" 
          component={props => <AsyncRoute loading={import(/* webpackChunkName: "Main" */ './Main')} props={props} />} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector("#app")
)