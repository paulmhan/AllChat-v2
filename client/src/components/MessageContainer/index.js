import React, { Component } from "react";
import { Message, Button } from "semantic-ui-react";
import moment from 'moment';
import { connect } from 'react-redux';
import "./style.css";
require("dotenv").config()
const { Translate } = require('@google-cloud/translate').v2;

const projectId = process.env.GOOGLE_PROJECT_ID;
console.log(projectId);

// Instantiates a client
const translate = new Translate({
  projectId,
  keyFilename:  "./AllChatKey.json",
});

class MessageContainer extends Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
      document.getElementById('message-container').append(`-----${this.props.userJoin}-----`)
    }
    if (this.props.userLeft !== prevProps.userLeft && this.props.userLeft !== "") {
      document.getElementById('message-container').append(`-----${this.props.userLeft}-----`)
    }
  }


  translateText =  async (message, language) => {

    console.log(message.text)
    console.log(language);
    
    // const [translation] =  await translate.translate(message.text, language);
    
    // console.log(translation);
  }

  render() {
    return (
      // <ReactAutoScroll
      //   targetPosition={5000}
      //   easeType={"linear"}
      //   speed={15}
      //   updateInterval={1}
      //   onScrollingDone={ () => console.log("scrolling finished") }
      //   scrollTargetRef={this.refs.autoScroll}
      //   isEnabled
      // >
        <div ref="autoScroll" className="ui message" id="message-container">
          {this.props.messages?.map((message, index) =>
            <div id="message" key={index}>
              <p id="timeStamp">
                <span>{moment(message.dateCreated).format('l, h:mm a')}</span>
              </p>
              <Message.Header> <p><small>{message.firstName}&nbsp;{message.lastName}:&nbsp;{message.text}</small></p></Message.Header>
              <Button size='mini' onClick={() => this.translateText(message, this.props.user.language)}>See translation</Button>
            </div>)}
        </div>
      // </ReactAutoScroll>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.currentUser,

  }
}

export default connect(mapStateToProps, {})(MessageContainer)
// export default MessageContainer;
