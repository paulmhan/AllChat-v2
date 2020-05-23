import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import moment from 'moment';
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "./../../components/MessageContainer";
import MessageInputBar from "../../components/MessageInputBar";
import LeaveBtn from "../../components/LeaveBtn";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "./style.css";


class Chat extends Component {
    state = {
        name: "",
        userId:1,
        message: "",
        placeholder: "Send a Message",
        messageError: false,
        messages: [{
            name: "AllChat",
            title: "Welcome to AllChat!",
            timeStamp: moment().format('l, h:mm a')
        }],
        users: [],
        newUser:[],
        messageId: ""
    }


    componentDidMount() {
        this.getUsers();
        this.receiveMessage();
        this.userLeft();
        this.userJoin();
    }


    componentWillUnmount() {
        this.handleLeave();
    }

    getUsers = () => {
        let { newUser } = this.props.history.location.state;
        console.log(this.props.history);
        console.log(this.props.history.location.state);
        this.props.socket.emit("getUsers", users => {
            this.props.socket.emit("currentJoin", {newUser})
            this.setState({
                name: newUser[0].name,
                userId: newUser[0].id, 
                newUser, 
                users
            });
        })
    }

    userJoinMessage = newUser => {
        console.log(newUser);
        let joinMessage = {name: "AllChat",
        title: `${newUser.newUser[0].name} has joined the chat!`,timeStamp: moment().format('l, h:mm a')}
        console.log(joinMessage);
        this.setState({ messages: [...this.state.messages,joinMessage ] });
        // this.scrollToBottom();
    }

    userLeftMessage = data => {
        console.log(data);
        let leftMessage = {name: "AllChat",
        title: `${data.name} has left the chat!`,timeStamp: moment().format('l, h:mm a')}
        console.log(leftMessage);
        this.setState({ messages: [...this.state.messages,leftMessage ] });
        // this.scrollToBottom();
    }


    userJoin = () => {
        this.props.socket.on("userJoined", newUser => {
            console.log(newUser);
            this.userJoinMessage(newUser);
            console.log(this.state.users);
            this.setState({ users:[...this.state.users, ...newUser.newUser] });
        })
    }

    userLeft = () => {
        this.props.socket.on("userLeft", data => {
            this.getUsers();
            this.userLeftMessage(data);
        })
    }


    createMessage = () => {
        this.props.socket.emit("createMessage", { name: this.state.name, title: this.state.message, timeStamp: moment().format('l, h:mm a'), userId: this.state.userId }, newMessage => {
            this.setState({ messages: [...this.state.messages, ...newMessage], message: '', placeholder:"Send a Message", messageError: false,});
            this.scrollToBottom();
        })
    };

    receiveMessage = () => {
        this.props.socket.on("messageReceive", newMessage => {
            this.setState({ messages: [...this.state.messages, ...newMessage] });
            this.scrollToBottom();
        })
    }

    
    handleMessageChange = e => {
        const { value } = e.target;
        this.setState({ message: value });
    };

    handleEnter = e => {
        if (e.keyCode===13){
            this.handleSend(e);
        } else {
           return
        }
    }

    handleSend = (e) => {
        e.preventDefault();
        this.checkInputs(e);
        if (this.state.message.length === 0) {
            this.setState({ placeholder: "Cannot be blank!" })
        } else {
            this.createMessage();
        };
    };

    scrollToBottom = () => {
        let chatTextArea = document.getElementById("message-container");
        const scrollHeight = chatTextArea.scrollHeight;
        const height = chatTextArea.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(chatTextArea).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
      };

    handleLeave = async () => {
        await this.props.socket.emit("leaveRoom", { userId: this.state.userId, name: this.state.name }, status => {
            console.log(status);
        })
    }

    checkInputs = e => {
        if (!this.state.message) {
            e.preventDefault();
            this.setState({ messageError: true })
        }
        let messageError;
        if (this.state.message.length === 0) {
            messageError = true;
            this.setState({ messageError })
        } else {
            messageError = false;
        }
    }

    render() {
        return (
            <Grid container>
                <Grid.Row
                    stretched>
                    <Grid.Column width={4}>
                        <ChatSideBar users={this.state.users} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={13}>
                                    <ChatRoomHeader name={this.state.name} />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <LeaveBtn />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <MessageContainer
                                        messages={this.state.messages}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <MessageInputBar
                                        getMessage={this.handleMessageChange}
                                        message={this.state.message}
                                        error={this.state.messageError}
                                        placeholder={this.state.placeholder}
                                        handleSend={this.handleSend}
                                        handleEnter = {this.handleEnter}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default withRouter(Chat);
