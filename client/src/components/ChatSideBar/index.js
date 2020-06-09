import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import "./style.css";

class ChatSideBar extends Component {


    render() {
        return (
            <div>
                <Segment.Group id="chatroom-interface">
                    <h1 id="room-name">{this.props.roomName}</h1>
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