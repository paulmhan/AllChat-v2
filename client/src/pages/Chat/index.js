import React, { Component } from "react";
import { Form, Grid, Input } from "semantic-ui-react";
import { Field, reduxForm, reset } from "redux-form";
import { connect } from 'react-redux';
import { compose } from "redux";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "../../components/MessageContainer";
import LeaveBtn from "../../components/LeaveBtn";
import requireAuth from "../../hoc/requireAuth";
import { subscribeToMessageFromServer, sendMessage, userJoinMessage } from "../../actions/sockets";
import { required } from 'redux-form-validators';
import { loadUser } from "../../actions/auth";
import "./style.css";

class Chat extends Component {

    state = {
        message: "",
        messages:[],
        messageValid: false,
        submitDisabled: true
    }

    componentDidMount() {
       
        this.props.subscribeToMessageFromServer();
        this.props.user || this.props.loadUser();
        // this.userJoin();
    }

    componentWillUnmount() {
        // this.handleLeave();
        // this.isLive = false;
    }

    handleMessageChange = e => {
        const { value } = e.target;
        this.setState({
            message: value
        });
    };
    
    handleMessageSubmit = (formValues, dispatch) => {
        console.log(formValues);
        dispatch({ type: 'SEND_MESSAGE'})
        if(formValues === "") {
            console.log("You must enter a message");
        };
    }
    
    userJoin = () => {
        this.userJoinMessage()
    };

    renderMessageInput = ({ input, meta }) => {
        console.log(input, "input");
        console.log(meta, "meta");
        return (
            <Form.Input
                {...input}
                error={ meta.touched && meta.error }
                fluid
                autoComplete='off'
                action={{
                    color: "blue",
                    labelPosition: "right",
                    icon: "arrow circle up",
                    content: "Send",
                    onClick: () => this.props.sendMessage({ 
                        userId: this.props.user._id, 
                        firstName: this.props.user.firstName,
                        lastName: this.props.user.lastName,
                        message: this.state.message }),
                    disabled: !this.state.message
                }}
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
                            // roomUsers={this.props.getRoomUsers()}
                            // userId={this.props.user?.id}
                        />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={13}>
                                    <ChatRoomHeader
                                        name={this.props.user?.firstName}
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <LeaveBtn />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <MessageContainer
                                     messages={this.props.messages} 
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Form onSubmit={handleSubmit(this.handleMessageSubmit)}>
                                        <Field 
                                        name="messageInputBar"
                                        component={this.renderMessageInput}
                                        validate={
                                            [
                                                required({ msg: 'Enter a message' })
                                            ]
                                        }
                                        onChange={this.handleMessageChange}
                                        />
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
        messages: state.socket.messages
     }
}


// export default requireAuth(connect(mapStateToProps, { subcribeToMessageFromServer, sendMessage })(Chat));

export default compose(
    reduxForm({ form: "chat" }),
    connect(mapStateToProps, { 
        loadUser, 
        subscribeToMessageFromServer, 
        sendMessage,
    }),
    requireAuth
)(Chat)
