import { NEW_MESSAGE } from "../socketTypes";


export const suscribeToMessageFromServer = () => dispatch => {
    dispatch({
        event: "serverToClientMessage",
        handle: data => dispatch({
            type: NEW_MESSAGE,
            payload: data,
        }),
    });
};

export const suscribeToRoomFromServer = () => dispatch => {
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
        emit: true,
    };
};



export const unsuscribeMessage = message => {
    return {
        event: "message",
        leave: true,
    };
    
};

export const createRoom = roomName => {
    return {
        event: "createRoom",
        payload: roomName,
        emit: true,
    };
    
};