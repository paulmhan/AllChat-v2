import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import "./style.css";


class ChatSideBar extends Component {


    render() {
        return (
            <div>
                <h1 id="user-title">Users:</h1>
                <Segment.Group id="chatroom-interface">
                    <div id="user-list">
                        {this.props.activeUsers?.map((user, index) =>
                            <Segment.Group key={index}>
                                <Segment>{user}</Segment>
                            </Segment.Group>)}
                    </div>
                </Segment.Group>

            </div>
        )
    }
}

export default ChatSideBar;