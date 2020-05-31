import React, { Component } from "react";
import { Form, Grid, Input } from "semantic-ui-react";
import { connect } from 'react-redux';
import { compose } from "redux";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "../../components/MessageContainer";
import MessageInputBar from "../../components/MessageInputBar";
import LeaveBtn from "../../components/LeaveBtn";
import requireAuth from "../../hoc/requireAuth";
import { subscribeToMessageFromServer, sendMessage } from "../../actions/sockets";
import { required } from 'redux-form-validators';
import { loadUser } from "../../actions/auth";
import "./style.css";

class Chat extends Component {

    state = {
        message:""
    }

    componentDidMount(){
        this.props.subscribeToMessageFromServer();
        this.props.user || this.props.loadUser();
    }

    handleMessageChange = e => {
        
        const { value } = e.target;
        this.setState({ 
            message: value
         });
        
    };


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
                                    //  messages={this.state.messages} 
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Form.Input
                                    fluid
                                    autoComplete='off'
                                    onChange = {this.handleMessageChange}
                                    onKeyDown = {this.handleEnter}
                                    validate={
                                        [
                                            required({ msg: 'Enter a message' })
                                        ]
                                    }
                                    action={{
                                        color: "blue",
                                        labelPosition: "right",
                                        icon: "arrow circle up",
                                        content: "Send",
                                        onClick: () => this.props.sendMessage({userId: this.props.user._id, message: this.state.message})
                                    }}
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

function mapStateToProps(state) {
    return { user: state.auth.currentUser }
}


// export default requireAuth(connect(mapStateToProps, { subcribeToMessageFromServer, sendMessage })(Chat));

export default compose(
    connect(mapStateToProps, {  loadUser, subscribeToMessageFromServer, sendMessage }),
    requireAuth
)(Chat)
