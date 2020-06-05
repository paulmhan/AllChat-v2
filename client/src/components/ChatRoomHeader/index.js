import React from "react";
import "./style.css";

const ChatRoomHeader = props => {
    return(
        <div>
           <h1 id="hi">{props.roomName}</h1>
           {/* {props.firstName}&nbsp;{props.lastName}&nbsp;in&nbsp; */}
        </div>
    )
}

export default ChatRoomHeader;