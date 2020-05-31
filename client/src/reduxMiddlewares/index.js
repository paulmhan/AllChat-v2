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
            result,
            cb,
            ...rest

        } = action; 

        // if(emit && cb){
        //     let handleEvent = handle;
        //     socket.emit(event, handleEvent);
        //     return;
        // }

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