import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'
import createSagaMiddleware, { END } from 'redux-saga'
import persistState, {mergePersistedState} from 'redux-localstorage';
import {AsyncStorage} from 'react-native';
import adapter from 'redux-localstorage/lib/adapters/AsyncStorage';
import filter from 'redux-localstorage-filter';

import rootSaga from '../sagas'

const reducer = compose(
  mergePersistedState()
)(rootReducer);
const storage = compose(
  filter('localStorage')
)(adapter(AsyncStorage));
export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      persistState(storage, 'localStorage'),
    ),
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  store.runSaga(rootSaga);
  return store
}
