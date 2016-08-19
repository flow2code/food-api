import { combineReducers } from 'redux';

import * as actions from '../actions';

function session(state = {
  loggedIn: false,
  username: '',
  loading: false,
  loginError: null,
  registerStep: 'start',
  registerError: null
}, action) {
  switch (action.type) {
    case actions.REGISTER_FILL_PLACE:
      return Object.assign({}, state, {
        registerStep: 'details'
      });
    case actions.REGISTER_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case actions.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        registerStep: 'finish'
      });
    case actions.REGISTER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        registerError: action.error
      });
    case actions.REGISTER_FINISH:
      return Object.assign({}, state, {
        registerStep: 'start'
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  session
});

export default rootReducer;
