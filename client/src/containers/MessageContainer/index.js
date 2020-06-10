import React, { Component } from "react";
import { Message, Button } from "semantic-ui-react";
import moment from 'moment';
import { connect } from 'react-redux';
import "./style.css";
import { translateMessage } from "../../actions/api";
require("dotenv").config();
const { Translate } = require('@google-cloud/translate').v2;


const projectId = process.env.GOOGLE_PROJECT_ID;

// Instantiates a client
const translate = new Translate({
  projectId,
  keyFilename:  "./AllChatKey.json",
});


class MessageContainer extends Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
      //margin auto
      // const div = document.createElement("div").setAttribute;
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
          {this.props.room.messages?.map((message, index) =>
            <Message key={index}>
              <p id="timeStamp">
                <span>{moment(message.dateCreated).format('l, h:mm a')}</span>
              </p>
              <Message.Header> <p><small>{message.firstName}&nbsp;{message.lastName}:&nbsp;{message.text}</small></p></Message.Header>
              <Button size='mini' onClick={() => this.props.translateMessage(message, this.props.user.language)}>See translation</Button>
              <Button size='mini' onClick={() => this.props.deleteMessage({ message, roomId:this.props.room._id })}>Delete Message</Button>
            </Message>)}

        </div>

      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.currentUser,

  }
}

export default connect(mapStateToProps, {translateMessage})(MessageContainer)
// export default MessageContainer;
