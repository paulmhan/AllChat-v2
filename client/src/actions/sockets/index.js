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

export const sendMessage = message => {
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