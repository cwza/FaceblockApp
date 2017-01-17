import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import authenticationReducer from './authenticationReducer'
import errorReducer from './errorReducer'
import authenticationActions from '../actions/authenticationActions'
import followRelationsReducer from './followRelationsReducer'
import requestInfoReducer from './requestInfoReducer'

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  followRelations: followRelationsReducer,
});

const faceblockReducer = combineReducers({
  entities: entitiesReducer,
  requestInfo: requestInfoReducer
});

const apisReducer = combineReducers({
  faceblock: faceblockReducer
});

const localStorageReducer = combineReducers({
  authentication: authenticationReducer
});

const appReducer = combineReducers({
  apis: apisReducer,
  error: errorReducer,
  localStorage: localStorageReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
// export default function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'INCREMENT_IF_ODD':
//       return (state % 2 !== 0) ? state + 1 : state
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
