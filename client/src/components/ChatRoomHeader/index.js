import React from "react";
import "./style.css";

const ChatRoomHeader = props => {
    return(
        <div>
           <h1 id="hi">{props.firstName}&nbsp;{props.lastName}&nbsp;in&nbsp;{props.roomName}</h1>
           
        </div>
    )
}

export default ChatRoomHeader;