import React, { Component } from "react";
import { Segment } from "semantic-ui-react";


import "./style.css";

class MessageContainer extends Component {


  render() {
    return (
      <div className="message-outline">
        <div className="ui message" id="message-container">
            {this.props.messages.map((message, index) =>
            <Segment key={index}>
              <p id="timeStamp">
                <span>{message.dateCreated}</span>
              </p>
              <p id ="userName"> <strong>{message.user.firstName}:</strong> {message.text}</p>
            </Segment>)}
        </div>
      </div>
    )
  }
};

export default MessageContainer;
