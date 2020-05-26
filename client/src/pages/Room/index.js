import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
// import moment from "moment";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "../../components/MessageContainer";
import MessageInputBar from "../../components/MessageInputBar";
import LeaveBtn from "../../components/LeaveBtn";
// import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "./style.css";

class Room extends Component {


    render() {
        return (
            <Grid container>
                <Grid.Row
                    stretched>
                    <Grid.Column width={4}>
                        <ChatSideBar
                        //  users={this.state.users} 
                         />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={13}>
                                    <ChatRoomHeader
                                    //  name={this.state.name} 
                                     />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <LeaveBtn />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <MessageContainer
                                    //  messages={this.state.messages} 
                                     />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <MessageInputBar
                                        // getMessage={this.handleMessageChange}
                                        // message={this.state.message}
                                        // error={this.state.messageError}
                                        // placeholder={this.state.placeholder}
                                        // handleSend={this.handleSend}
                                        // handleEnter={this.handleEnter}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

} export default withRouter(Room);