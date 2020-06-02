import { NEW_MESSAGE, NEW_ROOM, WELCOME_MESSAGE, USERJOIN_MESSAGE } from "../socketTypes";


export const subscribeToMessageFromServer = () => dispatch => {
    dispatch({
        event: "serverToClientMessage",
        handle: data => dispatch({
            type: NEW_MESSAGE,
            payload: data,
        }),
    });

    dispatch({
        event: "WelcomeMessage",
        handle: data => dispatch({
            type: WELCOME_MESSAGE,
            payload: data,
        }),
    });

    dispatch({
        event: "userJoinMessage",
        handle: data => dispatch({
            type: USERJOIN_MESSAGE,
            payload: data,
        }),
    });
};

export const subscribeToRoomFromServer = () => dispatch => {
    // console.log(data, "coming from server");
    dispatch({
        event: "serverToClientRoom",
        handle: data => dispatch({
            type: NEW_ROOM,
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

export const getAllRooms = () => {
    console.log('getting rooms');
    return {
        event: "getAllRooms",
        payload: null,
        emit: true,
    };
};

export const joinRoom = data => {
    console.log(data, "data in joinRoom actions");
    return {
        event: "joinRoom",
        payload: data,
        emit: true,
    }
}

export const deleteRoom = id => {
    console.log(id);
    return {
        token: localStorage.getItem("token"),
        event: "deleteRoom",
        payload: id,
        emit: true,
    }
}


// export const getRoomUsers = data => {
//     console.log("found users in room");
//     console.log(data);
//     return {
//         event: "getRoomUsers",
//         payload: data,
//         emit: true
//     };
// };
