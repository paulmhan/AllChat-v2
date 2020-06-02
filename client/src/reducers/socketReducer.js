import { NEW_MESSAGE,NEW_ROOM,ACTIVE_ROOM } from "../actions/socketTypes";

const INITIAL_STATE = {
    messages: [],
    rooms: [],
    activeRoom: {}

};


export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload ]};
        case NEW_ROOM:
            return { ...state, rooms:[...state.rooms, ...action.payload]};
        case ACTIVE_ROOM:
            return { ...state, activeRoom: action.payload }
        default:
            return state;
    }
}

