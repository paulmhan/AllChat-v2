import { NEW_MESSAGE, NEW_ROOM, LOAD_ROOMS, ACTIVE_ROOM, USER_JOIN, USER_LEFT } from "../actions/socketTypes";

const INITIAL_STATE = {
    messages: [],
    userJoin: "",
    userLeft:"",
    rooms: [],
    activeRoom: {},
};

//have case on leave room, empty out the messages

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case NEW_MESSAGE:
            // console.log(action.payload.messages);
            return { ...state, activeRoom: { ...state.activeRoom, messages: action.payload.messages }};
            // return { ...state, activeRoom: { ...state.activeRoom, messages: [...state.activeRoom.messages, action.payload.newMessage] }};
        case USER_JOIN:
            return { ...state, userJoin:action.payload.message, userLeft: "" };
        case USER_LEFT:
            // console.log(action.payload.message, "reducer");
            return { ...state, userLeft:action.payload.message, userJoin:"" };
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

