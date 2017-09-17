import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './reducers';
import AppWithNavigationState from './AppNavigator';
const loggerMiddleware = createLogger()

export default class App extends Component {
  store = createStore(AppReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('VM', () => App);
