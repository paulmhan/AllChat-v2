import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import moment from 'moment';
import "./style.css";

class MessageContainer extends Component {

  componentDidUpdate(prevProps) {

    if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
      document.getElementById('message-container').append(`-----${this.props.userJoin}-----`)
    }
    if (this.props.userLeft !== prevProps.userLeft && this.props.userLeft !== "") {
      document.getElementById('message-container').append(`-----${this.props.userLeft}-----`)
    }

  }

  render() {
    return (
      <div className="message-outline">
        <div className="ui message" id="message-container">
          {this.props.messages?.map((message, index) =>
            <Message key={index}>
              <p id="timeStamp">
                <span>{moment(message.dateCreated).format('MMMM Do YYYY, h:mm a')}</span>
              </p>
              <Message.Header> <strong>{message.firstName}&nbsp;{message.lastName}:</strong><p>{message.text}</p></Message.Header>
            </Message>)}

        </div>

      </div>
    )
  }
};

export default MessageContainer;
