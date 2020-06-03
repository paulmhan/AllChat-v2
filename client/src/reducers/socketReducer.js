import { NEW_MESSAGE, NEW_ROOM, WELCOME_MESSAGE, USERJOIN_MESSAGE, LOAD_ROOMS, ACTIVE_ROOM } from "../actions/socketTypes";

const INITIAL_STATE = {
    messages: [],
    rooms: [],
    activeRoom: {},
};

//have case on leave room, empty out the messages

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case NEW_MESSAGE:
            return { ...state, activeRoom: { ...state.activeRoom, messages: action.payload.messages }};
        case WELCOME_MESSAGE:
            console.log(state);
            const messages1 = state.activeRoom.messages;
            return { ...state, activeRoom: { ...state.activeRoom, messages: [...messages1, action.payload] }};
        case USERJOIN_MESSAGE:
            const messages2 = state.activeRoom.messages;
            return { ...state, activeRoom: { ...state.activeRoom, messages: [...messages2, action.payload] }};
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

