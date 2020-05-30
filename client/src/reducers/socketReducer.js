import { NEW_MESSAGE,NEW_ROOM } from "../actions/socketTypes";

const INITIAL_STATE = {
    messages: [],
    rooms: [],

};


export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload ]};
        case NEW_ROOM:
            return { ...state, rooms:[...state.rooms, action.payload]};
        default:
            return state;
    }
}