import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import MessageItem from "../../components/MessageItem";
import "./style.css";
import { translateMessage } from "../../actions/api";


class MessageContainer extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
      //margin auto
      const div = document.createElement("div");
      div.className = "joined";
      div.textContent = `-----${this.props.userJoin} ${moment().format('l, h:mm a')}-----`;
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
        <MessageItem 
          message={message} 
          key={index} 
          user={this.props.user} 
          translateMessage={this.props.translateMessage} 
          deleteMessage={this.props.deleteMessage} 
          roomId={this.props.room._id}
        /> 
        )}
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
