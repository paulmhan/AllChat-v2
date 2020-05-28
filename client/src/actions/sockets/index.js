import { NEW_MESSAGE } from "../socketTypes";


export const suscribeToMessageFromServer = () => dispatch => {
    console.log("message is sending to reducer")
    dispatch({
        event: "serverToClientMessage",
        handle: data => dispatch({
            type: NEW_MESSAGE,
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