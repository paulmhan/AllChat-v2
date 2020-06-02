import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';
import authReducer from './authReducer';
import socketReducer from "./socketReducer";
import { NEW_MESSAGE } from "../actions/socketTypes";

export default combineReducers({
  auth: authReducer,
  todos: todosReducer,
  counter: counterReducer,
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



// .plugin({
//     message: (state, action) => {
//       switch(action.type) {
//         case NEW_MESSAGE:
//           return undefined;
//         default:
//           return state;
//       }
//     }
//   })