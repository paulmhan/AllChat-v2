import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import moment from 'moment';
import "./style.css";

class MessageContainer extends Component {


  render() {
    return (
      <div className="message-outline">
        <div className="ui message" id="message-container">
            {this.props.messages?.map((message, index) =>
            <Segment key={index}>
              <p id="timeStamp">
                <span>{moment(message.dateCreated).format('MMMM Do YYYY, h:mm a')}</span>
              </p>
              <p id ="userName"> <strong>{message.firstName}&nbsp;{message.lastName}:</strong> {message.text}</p>
            </Segment>)}
        </div>
      </div>
    )
  }
};

export default MessageContainer;
