import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import "./style.css";


class ChatSideBar extends Component {

    state = {
        userList: []
    }

    getUsers = () => {
        const data = {
            users: this.state.userList
        }
        this.props.getUsers(data);
    }

    render() {

        return (
            <div>
                <h1 id="user-title">Users:</h1>
                <Segment.Group id="chatroom-interface">
                    <div id="user-list">
                        {/* {this.users.map((data, index) =>
                            <Segment.Group key={index}>
                                <Segment>{data.users}</Segment>
                            </Segment.Group>)} */}
                    </div>
                </Segment.Group>

            </div>
        )
    }
}

export default ChatSideBar;