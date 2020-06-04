import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import socketReducer from "./socketReducer";


export default combineReducers({
  auth: authReducer,
  form: formReducer.plugin({
    chat: (state, action) => {
      switch(action.type) {
        case 'SEND_MESSAGE':
          return undefined;
        default:
          return state;
      }
    }
  }),
  socket: socketReducer,
});