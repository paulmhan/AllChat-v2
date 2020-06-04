import io from "socket.io-client";

export default function socketMiddleware() {
    const socket = io();
    return ({ dispatch }) => next => action => {
        if (typeof action === "function"){
            return next(action);
        }

        const {
            
            emit,
            event,
            leave,
            handle,
            payload,
            // result,
            token,
            // ...rest
        } = action; 

        if(emit && token){
            socket.emit(event, {token, payload});
            return;
        }

        if(emit){
            socket.emit(event, payload);
            return;
        }

        
        if(!event){
            return next(action);
        }


        if(leave){
            socket.removeListener(event);
        }

        let handleEvent = handle;

        return socket.on(event, handleEvent);

    };
}