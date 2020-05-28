import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';
import authReducer from './authReducer';
import socketReducer from "./socketReducer";

export default combineReducers({
  auth: authReducer,
  todos: todosReducer,
  counter: counterReducer,
  form: formReducer,
  socket: socketReducer,
});