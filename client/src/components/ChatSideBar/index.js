import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import LeaveBtn from "../LeaveBtn";
import "./style.css";

class ChatSideBar extends Component {


    render() {
        return (
            <div id="chatroom-interface">
                <Segment.Group id="outer-segment-group">
                    <h1 id="room-name">{this.props.roomName}</h1>
                        <LeaveBtn user={this.props.user}/>
                        <br />
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

