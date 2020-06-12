import React, { Component } from 'react';
import DeleteMessageModal from "../../containers/DeleteMessageModal";
import { Message  } from "semantic-ui-react";
import moment from 'moment';



class MessageItem extends Component {

    state={
        translated: false
    }

    runTranslate = (message, language) => {
        this.props.translateMessage({ message, language });
        this.setState({ translated: !this.state.translated });
    }

    render() {
        console.log(this.props.user);
        return (
            <div>
                {this.props.message.userId === this.props.user._id
            ? <div id="owner">
                    <p id="timeStamp">
                        <span id="date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                    </p>
                    <Message.Header> <p id="message-text"><small>{this.props.message.text}</small></p></Message.Header>
                    <span id="translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                        <span>{this.state.translated ? "See Original" : "See Translation"}</span>
                    </span>
                    <DeleteMessageModal deleteMessage={this.props.deleteMessage} message={this.props.message} roomId={this.props.roomId} />
                </div>
            : <div id="message">
                    <p id="timeStamp">
                        <span id="date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                    </p>
                    <Message.Header> <p id="message-text"><small>{this.props.message.firstName}&nbsp;{this.props.message.lastName}:&nbsp;{this.props.message.text}</small></p></Message.Header>
                    <span id="translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                        <span>{this.state.translated ? "See Original" : "See Translation"}</span>
                    </span>
                </div>
    }</div>
        )
    }
}


export default MessageItem;