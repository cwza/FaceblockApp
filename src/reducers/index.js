import { combineReducers } from 'redux'

const appReducer = combineReducers({
  components: (state={}, action) => state,
});

const rootReducer = (state={}, action) => {
  return appReducer(state, action);
}

export default rootReducer;
