import { AUTH_USER, AUTH_USER_ERROR,GET_USER,GET_USER_ERROR,LEAVE_USER } from '../actions/types';


const INITIAL_STATE = {
  authenticated: '',
  authError: '',
  currentUser: "",
  getUserError: "",

};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload.token, authError: '' };
    case AUTH_USER_ERROR:
      return {...state, authError: action.payload };
    case GET_USER:
      return {...state, currentUser: action.payload.user, getUserError: "" };
    case GET_USER_ERROR:
      return {...state, getUserError: action.payload }
    case LEAVE_USER:
      return {...state, currentUser:""}
    default:
      return state;
  }
}


