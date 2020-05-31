import { NEW_MESSAGE, NEW_ROOM, ACTIVE_ROOM } from "../socketTypes";


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
            type: ACTIVE_ROOM,
            payload: data,
        }),
    });
    dispatch({
        event: "serverToClientRoom",
        handle: data => dispatch({
            type: NEW_ROOM,
            payload: data,
        }),
    });
};

export const sendMessage = data => {
    console.log(data, "this is message")
    console.log("message sent to server")
    return {
        event: "message",
        payload: data,
        emit: true
    };
};


export const unsubscribeMessage = message => {
    return {
        event: "message",
        leave: true,
    };
    
};

export const createRoom = data => {
    console.log('room sent to server')
    return {
        event: "createRoom",
        payload: data,
        emit: true,
    };
    
};