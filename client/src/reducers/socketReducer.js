import { NEW_MESSAGE,NEW_ROOM, WELCOME_MESSAGE, USERJOIN_MESSAGE, LOAD_ROOMS } from "../actions/socketTypes";

const INITIAL_STATE = {
    messages: [],
    rooms: [],
};

//have case on leave room, empty out the messages

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload ]};
        case WELCOME_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload]};
        case USERJOIN_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload]};
        case NEW_ROOM:
            return { ...state, rooms:[...state.rooms, ...action.payload]};
        case LOAD_ROOMS:
            return { ...state, rooms: action.payload}
        default:
            return state;
    }
}

