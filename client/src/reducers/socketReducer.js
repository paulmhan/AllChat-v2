import { NEW_MESSAGE, NEW_ROOM, LOAD_ROOMS, ACTIVE_ROOM } from "../actions/socketTypes";

const INITIAL_STATE = {
    messages: [],
    rooms: [],
    activeRoom: {},
};

//have case on leave room, empty out the messages

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case NEW_MESSAGE:
            console.log(action.payload.messages);
            return { ...state, activeRoom: { ...state.activeRoom, messages: action.payload.messages }};
        case NEW_ROOM:
            return { ...state, rooms: [...state.rooms, ...action.payload] };
        case LOAD_ROOMS:
            return { ...state, rooms: action.payload }
        case ACTIVE_ROOM:
            return { ...state, activeRoom: action.payload }
        default:
            return state;
    }
}

