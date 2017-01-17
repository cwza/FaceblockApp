import { createStore, applyMiddleware, compose } from 'redux';
import { Platform } from 'react-native';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'remote-redux-devtools'
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
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        // createLogger(),
      ),
      persistState(storage, 'redux')
    )
  )

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  store.runSaga(rootSaga);
  return store
}
