import { NEW_MESSAGE, NEW_ROOM, LOAD_ROOMS,IS_TYPINGMESSAGE, ACTIVE_ROOM, USER_JOIN, USER_LEFT } from "./../actions/socketTypes";
import{ TRANSLATE_MESSAGE} from "./../actions/types";
const INITIAL_STATE = {
    messages: [],
    userJoin: "",
    userLeft: "",
    userTyping:"",
    notTyping:"",
    rooms: [],
    activeRoom: {},
};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case NEW_MESSAGE:
            return { ...state, activeRoom: { ...state.activeRoom, messages: action.payload.messages }};
        case TRANSLATE_MESSAGE:
            const  {newMessage}   = action.payload
            console.log(newMessage, "reducer newMessage")
            // return { ...state, activeRoom: { ...state.activeRoom, messages: [...state.activeRoom.messages, newMessage] }};
            return {
                ...state, activeRoom: {
                    ...state.activeRoom, messages: state.activeRoom.messages.filter(message => {
                        console.log(message._id);
                        console.log(newMessage._id)
                       if(message._id == newMessage._id) {
                        message.text =  newMessage.text
                        message.originLanguage = newMessage.originLanguage
                       }
                       return message;
                            
                    })
                }
            }
        case USER_JOIN:
            return { ...state, userJoin: action.payload.message, userLeft: "" };
        case USER_LEFT:
            return { ...state, userLeft: action.payload.message, userJoin: "" };
        case IS_TYPINGMESSAGE:
            console.log(action.payload, "reducer")
            return { ...state, userTyping: action.payload.typingText, userJoin: "" };
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

