import { NEW_MESSAGE, NEW_ROOM } from "../socketTypes";


export const subscribeToMessageFromServer = () => dispatch => {
    dispatch({
        event: "serverToClientMessage",
        handle: data => dispatch({
            type: NEW_MESSAGE,
            payload: data,
        }),
    });
};

export const subscribeToRoomFromServer = () => dispatch => {
    dispatch({
        event: "serverToClientRoom",
        handle: data => dispatch({
            type: NEW_ROOM,
            payload: data,
        }),
    });
};

export const sendMessage = message => {
    console.log("message sent to server")
    return {
        event: "message",
        payload: message,
        emit: true
    };
};


export const unsubscribeMessage = message => {
    return {
        event: "message",
        leave: true,
    };
    
};

export const createRoom = roomName => {
    console.log('room sent to server')
    return {
        event: "createRoom",
        payload: roomName,
        emit: true,
    };
    
};