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
// {/* {this.props.room.messages?.map((message, index) =>
//           message.userId === this.props.user._id ?
//           <div id="owner" key={index}>
//             <p id="timeStamp">
//               <span id="owner-date">{moment(message.dateCreated).format('l, h:mm a')}</span>
//             </p>
//             <Message.Header> <p id="owner-text"><small>{message.text}</small></p></Message.Header>
//             <a id="owner-translate" size='mini' href="#" onClick={() => this.props.translateMessage({message, language:this.props.user.language})}><span>See translation</span></a>
//             <DeleteMessageModal deleteMessage={this.props.deleteMessage} message={message} roomId={this.props.room._id} />
//           </div> 
//           : 
//           <div id="message" key={index}>
//             <p id="timeStamp">
//               <span id="date">{moment(message.dateCreated).format('l, h:mm a')}</span>
//             </p>
//             <Message.Header> <p id="message-text"><small>{message.firstName}&nbsp;{message.lastName}:&nbsp;{message.text}</small></p></Message.Header>
//             <a id="translate" size='mini' href="#" onClick={() => this.props.translateMessage({message, language:this.props.user.language})}><span>See translation</span></a>
// </div>
//           )} */}