import { AUTH_USER, AUTH_USER_ERROR } from '../actions/types';


const INITIAL_STATE = {
  authenticated: '',
  authError: '',
  currentUser: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload.token, authError: '', currentUser: action.payload.user };
    case AUTH_USER_ERROR:
      return {...state, authError: action.payload };
    default:
      return state;
  }
}


