import React, { Component } from 'react';
import DeleteMessageModal from "../../containers/DeleteMessageModal";
import { Grid, Message, Image } from "semantic-ui-react";
import Paul from "../../assets/images/paul-profile.jpg";
import Suneetha from "../../assets/images/suneetha-profile.jpg";
import Placeholder from "../../assets/images/def-image.jpg";
import moment from 'moment';


class MessageItem extends Component {

    state={
        translated: false
    }

    runTranslate = (message, language) => {
        if(this.state.translated){
        this.props.translateMessage({ message, language: message.originLanguage });
        } else {
            this.props.translateMessage({ message, language });
        }
        this.setState({ translated: !this.state.translated });
    }

    render() {
        return (
            <Grid>
                {this.props.message.userId === this.props.user._id
                ? <>
                <Grid.Row>
                    <Grid.Column width={8}></Grid.Column>
                    <Grid.Column width={8} id="owner">
                    <Image circular size="tiny" src={Placeholder} floated='left'/>
                    <p id="timeStamp">
                        <span id="owner-date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                    </p>
                    <Message.Header compact> <p id="owner-text"><small>{this.props.message.text}</small></p></Message.Header>
                    <span id="owner-translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                        <span className="cursor">{this.state.translated ? "See Original" : "See Translation"}</span>
                    </span>
                    <DeleteMessageModal deleteMessage={this.props.deleteMessage} message={this.props.message} roomId={this.props.roomId} />
                    
                    </Grid.Column>
                </Grid.Row>
                </>
            : <>
                <Grid.Row>
                <Grid.Column width={8} id="message">
                <Image circular size="tiny" src={Placeholder} floated='left'/>
                <Grid.Row>
                    <p id="timeStamp">
                        <span id="date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                    </p>
                    <Message.Header compact> <p id="message-text"><small>{this.props.message.firstName}&nbsp;{this.props.message.lastName}:&nbsp;{this.props.message.text}</small></p></Message.Header>
                    <span id="translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                        <span className="cursor">{this.state.translated ? "See Original" : "See Translation"}</span>
                    </span>
                    </Grid.Row>
                </Grid.Column><Grid.Column width={8}></Grid.Column>
                </Grid.Row></>}
            </Grid>
        )
    }
}


export default MessageItem;