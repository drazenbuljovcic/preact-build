/* eslint global-require: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import { applyMiddleware, createStore, combineReducers } from 'redux';

import ReduxThunk from 'redux-thunk';

import configReducer from './reducers/config/configReducer';

let middleware = [ReduxThunk];

if (env !== 'production') {
  const logger = require('redux-logger').default;

  middleware = [...middleware, logger];
}

const reducers = combineReducers({
  config: configReducer,
});

export default applyMiddleware(...middleware)(createStore)(reducers);
