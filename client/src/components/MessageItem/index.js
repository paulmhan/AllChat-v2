import React, { Component } from 'react';
import DeleteMessageModal from "../../containers/DeleteMessageModal";
import { Grid, Message } from "semantic-ui-react";
import moment from 'moment';



class MessageItem extends Component {

    state={
        translated: false
    }

    runTranslate = (message, language) => {
        if(this.state.translated){
        this.props.translateMessage({ message, language: message.originLanguage });
        } else {
            this.props.translateMessage({ message, language });
        }
        this.setState({ translated: !this.state.translated });
    }

    render() {
        console.log(this.props.user);
        return (
            <Grid>
                {this.props.message.userId === this.props.user._id
            ? <>
            <Grid.Row>
            <Grid.Column width={8}></Grid.Column>
            <Grid.Column width={8} id="owner">
                    <p id="timeStamp">
                        <span id="owner-date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                    </p>
                    <Message.Header> <p id="owner-text"><small>{this.props.message.text}</small></p></Message.Header>
                    <span id="owner-translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                        <span className="cursor">{this.state.translated ? "See Original" : "See Translation"}</span>
                    </span>
                    <DeleteMessageModal deleteMessage={this.props.deleteMessage} message={this.props.message} roomId={this.props.roomId} />
                </Grid.Column>
                </Grid.Row>
                </>
            : <>
                <Grid.Row>
                <Grid.Column width={8} id="message">
                    <p id="timeStamp">
                        <span id="date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                    </p>
                    <Message.Header> <p id="message-text"><small>{this.props.message.firstName}&nbsp;{this.props.message.lastName}:&nbsp;{this.props.message.text}</small></p></Message.Header>
                    <span id="translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                        <span className="cursor">{this.state.translated ? "See Original" : "See Translation"}</span>
                    </span>
                </Grid.Column><Grid.Column width={8}></Grid.Column>
                </Grid.Row></>}
            </Grid>
        )
    }
}


export default MessageItem;