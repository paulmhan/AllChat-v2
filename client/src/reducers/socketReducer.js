import { NEW_MESSAGE } from "../actions/socketTypes";

const INITIAL_STATE = {
    someMessages: [],
};


export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case NEW_MESSAGE:
            retrun {...state, someMessages: [...state.someMessages, action.payload ]};
        default:
            return state;
    }
}