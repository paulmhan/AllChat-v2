import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Grid, Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { compose } from "redux";
import ChatSideBar from "../../components/ChatSideBar"
// import ChatRoomHeader from "../../components/ChatRoomHeader";
import MessageContainer from "../../containers/MessageContainer";
// import LeaveBtn from "../../components/LeaveBtn";
import requireAuth from "../../hoc/requireAuth";
import { subscribeToMessageFromServer, sendMessage, isTyping, notTyping, getActiveRoom, unsubscribeMessage, leaveRoom, deleteMessage } from "../../actions/sockets";
import { loadUser } from "../../actions/auth";
import "./style.css";


class Chat extends Component {


    async componentDidMount() {
        this.props.subscribeToMessageFromServer();
        this.props.user || await this.props.loadUser();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const roomId = urlParams.get('room');
        const data = { roomId, user: this.props.user };
        await this.props.getActiveRoom(data);
    }

    componentWillUnmount() {
        this.props.unsubscribeMessage();
        const user = this.props.user;
        const room = this.props.room;
        console.log("closed")
        this.props.leaveRoom({ room, user });
    }


    componentDidUpdate(prevProps) {
        if (this.props.room?.messages?.length !== prevProps.room?.messages?.length) {
            this.scrollToBottom();
        }
        if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
            this.scrollToBottom();
        }
        if (this.props.userLeft !== prevProps.userLeft && this.props.userLeft !== "") {
            this.scrollToBottom();
        }
    }
    

    scrollToBottom = () => {
        let chatTextArea = document.getElementById("message-container");
        const scrollHeight = chatTextArea.scrollHeight;
        const height = chatTextArea.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(chatTextArea).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };

    handleMessageSubmit = (formValues, dispatch) => {
        const user = this.props.user;
        const room = this.props.room;
        this.props.sendMessage({ formValues, user, room });
        this.props.notTyping({ user, room });
        dispatch({ type: 'SEND_MESSAGE' });
    }

    renderMessageInput = ({ input, meta }) => {
        return (
            <Form.Input
                {...input}
                error={meta.touched && meta.error}
                fluid
                autoComplete='off'
            />
        );
    }

    handleKeyPress = () => {
        const user = this.props.user;
        const room = this.props.room;
        console.log("1 hello");
        this.props.isTyping({ user, room });
        console.log("2 hello");
        console.log();
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Grid id="chatroom-container">
                <Grid.Column width={3}>
                    <ChatSideBar
                        activeUsers={this.props.room.users}
                        roomName={this.props.room.text}
                    />
                </Grid.Column>
                <Grid.Column width={13}>
                    <MessageContainer
                        room={this.props.room}
                        userJoin={this.props.userJoin}
                        userLeft={this.props.userLeft}
                        deleteMessage={this.props.deleteMessage}
                        user={this.props.user}

                    />
                    <p>{this.props.typingText}</p>
                    <Form onSubmit={handleSubmit(this.handleMessageSubmit)}>
                        <Grid>
                            <Grid.Column width={14}>
                                <Field
                                    name="message"
                                    component={this.renderMessageInput}
                                    onKeyDown={() => this.handleKeyPress()}
                                    fluid
                                />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button
                                    fluid
                                    id="SendBtn"
                                    type="submit"
                                >
                                    <Icon name='arrow circle up' />
                                    Send
                                 </Button>
                            </Grid.Column>
                        </Grid>


                    </Form>
                </Grid.Column>
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

export default compose(
    reduxForm({ form: "chat" }),
    connect(mapStateToProps, {
        loadUser,
        subscribeToMessageFromServer,
        sendMessage,
        isTyping,
        notTyping,
        getActiveRoom,
        unsubscribeMessage,
        leaveRoom,
        deleteMessage
    }),
    requireAuth
)(Chat)


// // {/* <Grid.Row>
//                                 <Grid.Column width={4}>

//                                 </Grid.Column>
//                                 <Grid.Column width={8}>
//                                     <ChatRoomHeader
//                                         roomName={this.props.room.text}
//                                         firstName={this.props.user?.firstName}
//                                         lastName={this.props.user?.lastName}
//                                     />
//                                 </Grid.Column>
//                                 <Grid.Column width={4}>
//                                     <LeaveBtn />
// //                                 </Grid.Column><Grid>
//                             <Grid.Row>
//                                 <Grid.Column width={16}>
//                                     
//                                 </Grid.Column>
//                             </Grid.Row>
//                             <Grid.Row centered>
//                                 <Grid.Column width={16}>
//                                     <Form onSubmit={handleSubmit(this.handleMessageSubmit)}>
//                                         <Grid>
//                                             <Grid.Column width={15}>
//                                                 <Field
//                                                     name="message"
//                                                     component={this.renderMessageInput}
//                                                     fluid
//                                                 />
//                                             </Grid.Column>
//                                             <Grid.Column width={1}>
//                                                 <Button
//                                                     fluid
//                                                     id="SendBtn"
//                                                     type="submit"
//                                                     color="teal">
//                                                     <Icon name='arrow circle up' />
//                                                     Send
//                                                 </Button>
//                                             </Grid.Column>
//                                         </Grid>


//                                     </Form>
//                                 </Grid.Column>
//                             </Grid.Row>
//                         </Grid>