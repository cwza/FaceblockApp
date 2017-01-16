import { fork } from 'redux-saga/effects'
import postsWatchers from './postsSagas'

export default function* root() {
  yield [
    ...Object.values(postsWatchers).map(postsWatcher => fork(postsWatcher)),
  ]
}
