import React from "react";
import "./style.css";

const ChatRoomHeader = props => {
    return(
        <div>
           <h1 id="hi">Hi {props.name}!</h1>
        </div>
    )
}

export default ChatRoomHeader;