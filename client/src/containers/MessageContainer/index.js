import React, { Component } from "react";
import { Message, Button, Icon } from "semantic-ui-react";
import moment from 'moment';
import { connect } from 'react-redux';
import DeleteMessageModal from "../../containers/DeleteMessageModal";

import "./style.css";
import { translateMessage } from "../../actions/api";


class MessageContainer extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
      //margin auto
      const div = document.createElement("div");
      div.className = "joined";
      div.textContent = `-----${this.props.userJoin}-----`;
      document.getElementById('message-container').append(div);
    }
    if (this.props.userLeft !== prevProps.userLeft && this.props.userLeft !== "") {
      const div = document.createElement("div");
      div.className = "left";
      div.textContent = `-----${this.props.userLeft}-----`;
      document.getElementById('message-container').append(div);
    }
  }

  render() {
    return (
        <div className="ui message" id="message-container">
          {this.props.room.messages?.map((message, index) =>
            <div id="message" key={index}>
              <p id="timeStamp">
                <span id="date">{moment(message.dateCreated).format('l, h:mm a')}</span>
              </p>
              <Message.Header> <p id="message-text"><small>{message.firstName}&nbsp;{message.lastName}:&nbsp;{message.text}</small></p></Message.Header>
              <Button id="translate-btn" size='mini' onClick={() => this.props.translateMessage({message, language:this.props.user.language})}>See translation</Button>
              {/* <Button onClick={()=>console.log(message, this.props.user)}>hi</Button> */}
              {message.userId === this.props.user._id && <DeleteMessageModal deleteMessage={this.props.deleteMessage} message={message} roomId={this.props.room._id} />}
              {/* <DeleteMessageModal deleteMessage={this.props.deleteMessage} message={message} roomId={this.props.room._id} /> */}
             
              </div>)}
        </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.currentUser,
  }
}

export default connect(mapStateToProps, { translateMessage })(MessageContainer)
// export default MessageContainer;
