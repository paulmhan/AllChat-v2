import React, { Component } from 'react';
import DeleteMessageModal from "../../containers/DeleteMessageModal";
import { Grid, Message, Image } from "semantic-ui-react";
import Paul from "../../assets/images/paul-profile.jpg";
import Suneetha from "../../assets/images/suneetha-profile.jpg";
import Placeholder from "../../assets/images/def-image.jpg";
import content from "../../content.js";
import moment from 'moment';


class MessageItem extends Component {

    state = {
        translated: false
    }

    renderSeeOriginal(language) {
        switch (language) {
            case "es":
                return content.original.es;
            case "zh":
                return content.original.zh;
            case "ar":
                return content.original.ar;
            case "fr":
                return content.original.fr;
            case "de":
                return content.original.de;
            case "hi":
                return content.original.hi;
            case "it":
                return content.original.it;
            case "ja":
                return content.original.ja;
            case "ko":
                return content.original.ko;
            case "ru":
                return content.original.ru;
            case "tl":
                return content.original.tl;
            case "te":
                return content.original.te;
            case "vi":
                return content.original.vi;
            default:
                return content.original.en;
        }
    }

    renderSeeTranslation(language) {
        switch (language) {
            case "es":
                return content.translation.es;
            case "zh":
                return content.translation.zh;
            case "ar":
                return content.translation.ar;
            case "fr":
                return content.translation.fr;
            case "de":
                return content.translation.de;
            case "hi":
                return content.translation.hi;
            case "it":
                return content.translation.it;
            case "ja":
                return content.translation.ja;
            case "ko":
                return content.translation.ko;
            case "ru":
                return content.translation.ru;
            case "tl":
                return content.translation.tl;
            case "te":
                return content.translation.te;
            case "vi":
                return content.translation.vi;
            default:
                return content.translation.en;
        }
    }

    runTranslate = (message, language) => {
        if (this.state.translated) {
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
                                <Image circular size="tiny" src={Placeholder} floated='left' />
                                <p id="timeStamp">
                                    <span id="owner-date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                                </p>
                                <Message.Header compact> <p id="owner-text"><small>{this.props.message.text}</small></p></Message.Header>
                                <span id="owner-translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                                    <span className="cursor">{this.state.translated ? this.renderSeeOriginal(this.props.user?.language) : this.renderSeeTranslation(this.props.user?.language)}</span>
                                </span>
                                <DeleteMessageModal deleteMessage={this.props.deleteMessage} message={this.props.message} roomId={this.props.roomId} user={this.props.user} />

                            </Grid.Column>
                        </Grid.Row>
                    </>
                    : <>
                        <Grid.Row>
                            <Grid.Column width={8} id="message">
                                <Image circular size="tiny" src={Placeholder} floated='left' />
                                <Grid.Row>
                                    <p id="timeStamp">
                                        <span id="date">{moment(this.props.message.dateCreated).format('l, h:mm a')}</span>
                                    </p>
                                    <Message.Header compact> <p id="message-text"><small>{this.props.message.firstName}&nbsp;{this.props.message.lastName}:&nbsp;{this.props.message.text}</small></p></Message.Header>
                                    <span id="translate" size='mini' onClick={() => this.runTranslate(this.props.message, this.props.user.language)}>
                                        <span className="cursor">{this.state.translated ? this.renderSeeOriginal(this.props.user?.language) : this.renderSeeTranslation(this.props.user?.language)}</span>
                                    </span>
                                </Grid.Row>
                            </Grid.Column><Grid.Column width={8}></Grid.Column>
                        </Grid.Row></>}
            </Grid>
        )
    }
}


export default MessageItem;