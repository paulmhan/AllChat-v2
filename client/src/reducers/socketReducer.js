import { NEW_MESSAGE } from "../actions/socketTypes";

const INITIAL_STATE = {
    messages: [],
};


export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload ]};
        default:
            return state;
    }
}