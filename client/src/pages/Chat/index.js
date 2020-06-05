import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Grid, Button, Icon } from "semantic-ui-react";
import { Field, reduxForm, } from "redux-form";
import { connect } from 'react-redux';
import { compose } from "redux";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "../../components/MessageContainer";
import LeaveBtn from "../../components/LeaveBtn";
import requireAuth from "../../hoc/requireAuth";
import { subscribeToMessageFromServer, sendMessage, getActiveRoom, unsubscribeMessage, leaveRoom } from "../../actions/sockets";
import { loadUser } from "../../actions/auth";
import "./style.css";

class Chat extends Component {

    componentDidMount() {
        this.props.subscribeToMessageFromServer();
        this.props.user || this.props.loadUser();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const roomId = urlParams.get('room');
        console.log(this.props.user);
        const data = { roomId, user: this.props.user }
        this.props.getActiveRoom(data);
    }


    componentWillUnmount() {
        this.props.unsubscribeMessage();
        const user = this.props.user;
        const room = this.props.room;
        this.props.leaveRoom({ room, user });
    }

    scrollToBottom = () => {
        let chatTextArea = document.getElementById("message-container");
        const scrollHeight = chatTextArea.scrollHeight;
        const height = chatTextArea.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(chatTextArea).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };

    handleMessageSubmit = (formValues, dispatch) => {
        console.log(formValues);
        const user = this.props.user;
        const room = this.props.room;
        this.props.sendMessage({ formValues, user, room });
        dispatch({ type: 'SEND_MESSAGE' })
        if (formValues === "") {
            console.log("You must enter a message");
        };
        this.scrollToBottom();
    }

    renderMessageInput = ({ input, meta }) => {
        // console.log(input, "input");
        // console.log(meta, "meta");
        // const btnStyle = {
        //     backgroundColor: "#32CD33",
        //     color: "white"
        // };
        return (
            <Form.Input
                {...input}
                error={meta.touched && meta.error}
                fluid
                autoComplete='off'
            />
        );
    }



    render() {
        const { handleSubmit } = this.props;
        return (
            <Grid container>
                <Grid.Row
                    stretched>
                    <Grid.Column width={4}>
                        <ChatSideBar
                            activeUsers={this.props.room.users}
                        />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={13}>
                                    <ChatRoomHeader
                                        roomName={this.props.room.text}
                                        firstName={this.props.user?.firstName}
                                        lastName={this.props.user?.lastName}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <LeaveBtn />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <MessageContainer
                                        messages={this.props.room.messages}
                                        activeUsers={this.props.room.users}
                                        userJoin={this.props.userJoin}
                                        userLeft={this.props.userLeft}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Form onSubmit={handleSubmit(this.handleMessageSubmit)}>
                                        <Grid>
                                            <Grid.Column width={13}>
                                                <Field
                                                    name="message"
                                                    component={this.renderMessageInput}
                                                    fluid
                                                />
                                            </Grid.Column>
                                            <Grid.Column width={3}>
                                                <Button
                                                    fluid
                                                    id="SendBtn"
                                                    type="submit"
                                                    color="teal">
                                                    <Icon name='arrow circle up' />
                                                    Send
                                                </Button>
                                            </Grid.Column>
                                        </Grid>


                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.auth.currentUser,
        room: state.socket.activeRoom,
        userJoin: state.socket.userJoin,
        userLeft: state.socket.userLeft,
    }
}


// export default requireAuth(connect(mapStateToProps, { subcribeToMessageFromServer, sendMessage })(Chat));

export default compose(
    reduxForm({ form: "chat" }),
    connect(mapStateToProps, {
        loadUser,
        subscribeToMessageFromServer,
        sendMessage,
        getActiveRoom,
        unsubscribeMessage,
        leaveRoom,
    }),
    requireAuth
)(Chat)
