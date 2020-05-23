import React from "react";
import { Input } from "semantic-ui-react";


const MessageInputBar = props => {
    return (
        <div>
            <Input
                fluid
                error={props.error}
                value={props.message}
                onChange={props.getMessage}
                onKeyDown = {props.handleEnter}
                action={{
                    color: "blue",
                    labelPosition: "right",
                    icon: "arrow circle up",
                    content: "Send",
                    onClick: props.handleSend
                }}
                placeholder={props.placeholder}
            />

        </div>
    )
};

export default MessageInputBar;



