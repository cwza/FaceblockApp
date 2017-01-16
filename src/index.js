import React from 'react'
import { Component } from 'react-native';
import { Provider } from 'react-redux';

import App from './containers/App'
import rootSaga from './sagas'

import configureStore from './store/configureStore'


const defaultState = {
};
const store = configureStore(defaultState)
store.runSaga(rootSaga)

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Main
