import { NEW_MESSAGE, NEW_ROOM, ACTIVE_ROOM, GET_ALL_ROOMS } from "../socketTypes";


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
    // console.log(data, "coming from server");
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
    dispatch({
        event: "serverToClientRoom",
        handle: data => dispatch({
            type: GET_ALL_ROOMS,
            payload: data,
        }),
    });
};

export const sendMessage = data => {
    console.log("message sent to server")
    return {
        event: "message",
        payload: data,
        emit: true
    };
};

export const userJoinMessage = () => {
    console.log("userJoinmessage sent to server")
    return {
        event: "userJoinMessage",
        payload: { 
            firstName:"AllChatBot", 
            lastName:"", 
            message:"Welcome to AllChat!", 
            userId:"12345678"
         },
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
    console.log('room sent to server');
    return {
        event: "createRoom",
        payload: data,
        emit: true,
    };
};

// export const createRoom = data => {
//     console.log('room sent to server');
//     return {
//         event: "createRoom",
//         payload: data,
//         emit: true,
//     };
// };

export const getAllRooms = () => {
    console.log('getting rooms');
    return {
        event: "getAllRooms",
        payload: null,
        emit: true,
    };
};


// export const getRoomUsers = data => {
//     console.log("found users in room");
//     console.log(data);
//     return {
//         event: "getRoomUsers",
//         payload: data,
//         emit: true
//     };
// };
