import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import moment from 'moment';
import ReactAutoScroll from "react-to-target-auto-scroll";
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
    return (
      <ReactAutoScroll
        targetPosition={5000}
        easeType={"linear"}
        speed={15}
        updateInterval={1}
        onScrollingDone={ () => console.log("scrolling finished") }
        scrollTargetRef={this.refs.autoScroll}
        isEnabled
      >
        <div ref="autoScroll" className="ui message" id="message-container">
          {this.props.messages?.map((message, index) =>
            <Message key={index}>
              <p id="timeStamp">
                <span>{moment(message.dateCreated).format('l, h:mm a')}</span>
              </p>
              <Message.Header> <p><small>{message.firstName}&nbsp;{message.lastName}:&nbsp;{message.text}</small></p></Message.Header>
            </Message>)}
        </div>
      </ReactAutoScroll>
    )
  }
};

export default MessageContainer;
