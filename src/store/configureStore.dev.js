import { createStore, applyMiddleware, compose } from 'redux';
import { Platform } from 'react-native';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'remote-redux-devtools'


export default function configureStore(initialState) {
  // const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        // sagaMiddleware,
        // createLogger(),
      ),
    )
  )

  // store.runSaga = sagaMiddleware.run
  // store.close = () => store.dispatch(END)
  return store
}
