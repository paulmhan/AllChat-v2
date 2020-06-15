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
                        <LeaveBtn />
                        <br />
                    <div id="user-list">
                        {this.props.activeUsers?.map((user, index) =>
                            <Segment.Group key={index}>
                                <Segment id="user-name">{user}</Segment>
                            </Segment.Group>)}
                    </div>
                </Segment.Group>
            </div>
        )

    }
}

export default ChatSideBar;

// userList: []

// getRoomUsers = () => {
    //     const data = {
    //         users: this.state.userList,
    //         userId: this.props.userId
    //     }
    //     this.props.getRoomUsers(data);
    // }

    // <div>
            //     <h1 id="user-title">Users:</h1>
            //     <Segment.Group id="chatroom-interface">
            //         <div id="user-list">
            //             {/* {this.users.map((data, index) =>
            //                 <Segment.Group key={index}>
            //                     <Segment>{data.users}</Segment>
            //                 </Segment.Group>)} */}
            //         </div>
            //     </Segment.Group>

            // </div>