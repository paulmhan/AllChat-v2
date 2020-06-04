import { NEW_MESSAGE, NEW_ROOM, LOAD_ROOMS, ACTIVE_ROOM } from "../socketTypes";


export const subscribeToMessageFromServer = () => dispatch => {
    console.log("listening");
    
    dispatch({
        event: "serverToClientMessage",
        handle: data => {
            dispatch({
                type: NEW_MESSAGE,
                payload: data,
            })
        },
    });

    dispatch({
        event: "activeRoom",
        handle: data => dispatch({
            type: ACTIVE_ROOM,
            payload: data,
        }),
    });
}

export const subscribeToRoomFromServer = () => dispatch => {
    console.log("coming from server");
    dispatch({
        event: "serverToClientRoom",
        handle: data => dispatch({
            type: NEW_ROOM,
            payload: data,
        }),
    });
    dispatch({
        event: "loadAllRooms",
        handle: data => dispatch({
            type: LOAD_ROOMS,
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
    console.log('room sent to server')
    return {
        event: "createRoom",
        payload: data,
        emit: true,
    };
    
};

export const getRoomUsers = data => {
    console.log("found users in room");
    console.log(data);
    return {
        event: "getRoomUsers",
        payload: data,
        emit: true
    };
}

export const getAllRooms = () => {
    console.log('getting rooms');
    return {
        event: "getAllRooms",
        payload: null,
        emit: true,
    };
};
export const joinRoom = data => {
    console.log(data);
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

export const getActiveRoom = roomId => {
    return {
        event: "getActiveRoom",
        payload: roomId,
        emit: true,
    };
};

export const leaveRoom = data => {
    console.log('Leave room');
    return {
        event: "leaveRoom",
        payload: data,
        emit: true,
    };
};
