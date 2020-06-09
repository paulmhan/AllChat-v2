import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import moment from 'moment';
// import { css } from "glamor";
// import ScrollToBottom from "react-scroll-to-bottom";
import "./style.css";

class MessageContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
      document.getElementById('message-container').append(`-----${this.props.userJoin}----`)
    }
    if (this.props.userLeft !== prevProps.userLeft && this.props.userLeft !== "") {
      document.getElementById('message-container').append(`-----${this.props.userLeft}-----`)
    }
  }

  render() {
    // const ROOT_CSS = css({
    //   height: 840,
    //   width: "100%"
    // })
    return (

      <div className="ui message" id="message-container">
        {/* <ScrollToBottom className={ ROOT_CSS }> */}
        {this.props.messages?.map((message, index) =>
          <Message key={index}>
            <p id="timeStamp">
              <span>{moment(message.dateCreated).format('l, h:mm a')}</span>
            </p>
            <Message.Header> <p><small>{message.firstName}&nbsp;{message.lastName}:&nbsp;{message.text}</small></p></Message.Header>
          </Message>)}
        {/* </ScrollToBottom> */}
      </div>
    )
  }
};

export default MessageContainer;
