import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Grid, Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { compose } from "redux";
import ChatSideBar from "../../components/ChatSideBar"
import MessageContainer from "../../containers/MessageContainer";
import requireAuth from "../../hoc/requireAuth";
import { subscribeToMessageFromServer, sendMessage, isTyping, notTyping, getActiveRoom, unsubscribeMessage, leaveRoom, deleteMessage } from "../../actions/sockets";
import { loadUser } from "../../actions/auth";
import content from "../../content.js";

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
    

    renderSend(language) {
        switch (language) {
          case "es":
            return content.send.es;
          case "zh":
            return content.send.zh;
          case "ar":
            return content.send.ar;
          case "fr":
            return content.send.fr;
          case "de":
            return content.send.de;
          case "hi":
            return content.send.hi;
          case "it":
            return content.send.it;
          case "ja":
            return content.send.ja;
          case "ko":
            return content.send.ko;
          case "ru":
            return content.send.ru;
          case "tl":
            return content.send.tl;
          case "te":
            return content.send.te;
          case "vi":
            return content.send.vi;
          default:
            return content.send.en;
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

    handleChange = () => {
        const user = this.props.user;
        const room = this.props.room;
        this.props.isTyping({ user, room });
    }

    handleBlur = () => {
        const user = this.props.user;
        const room = this.props.room;
        this.props.notTyping({ user, room });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Grid id="chatroom-container">
                <Grid.Column width={3}>
                    <ChatSideBar
                        activeUsers={this.props.room.users}
                        roomName={this.props.room.text}
                        user={this.props.user}
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
                    <div className="typing"><p>{this.props.userTyping.typingText}</p></div>
                    <Form onSubmit={handleSubmit(this.handleMessageSubmit)}>
                        <Grid>
                            <Grid.Column tablet={12} computer={13} largeScreen={14} widescreen={14}>
                                <Field
                                    name="message"
                                    component={this.renderMessageInput}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    fluid
                                />
                            </Grid.Column>
                            <Grid.Column tablet={4} computer={3} largeScreen={2} widescreen={2}>
                                <Button
                                    fluid
                                    id="SendBtn"
                                    type="submit"
                                >
                                    <Icon name='arrow circle up' />
                                    {this.renderSend(this.props.user?.language)}
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
        userTyping: state.socket.userTyping,
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
