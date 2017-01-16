import { take, put, call, fork, select } from 'redux-saga/effects'
import postsActions from '../actions/postsActions'

function* watchFetchPostsStart() {
  while(true) {
    let {payload} = yield take(postsActions.fetchPostsStart().type);
    console.log('fetchPostsStart payload: ', payload);
  }
}
export default {
  watchFetchPostsStart
};
