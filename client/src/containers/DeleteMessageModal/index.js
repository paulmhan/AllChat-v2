import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import content from "../../content.js";


import "./style.css";

class DeleteMessageModal extends Component {

  state = {
    open: false
  }

  renderDelete(language) {
    switch (language) {
      case "es":
        return content.delete.es;
      case "zh":
        return content.delete.zh;
      case "ar":
        return content.delete.ar;
      case "fr":
        return content.delete.fr;
      case "de":
        return content.delete.de;
      case "hi":
        return content.delete.hi;
      case "it":
        return content.delete.it;
      case "ja":
        return content.delete.ja;
      case "ko":
        return content.delete.ko;
      case "ru":
        return content.delete.ru;
      case "tl":
        return content.delete.tl;
      case "te":
        return content.delete.te;
      case "vi":
        return content.delete.vi;
      default:
        return content.delete.en;
    }
  }

  renderDeleteMessage(language) {
    switch (language) {
      case "es":
        return content.deletemessage.es;
      case "zh":
        return content.deletemessage.zh;
      case "ar":
        return content.deletemessage.ar;
      case "fr":
        return content.deletemessage.fr;
      case "de":
        return content.deletemessage.de;
      case "hi":
        return content.deletemessage.hi;
      case "it":
        return content.deletemessage.it;
      case "ja":
        return content.deletemessage.ja;
      case "ko":
        return content.deletemessage.ko;
      case "ru":
        return content.deletemessage.ru;
      case "tl":
        return content.deletemessage.tl;
      case "te":
        return content.deletemessage.te;
      case "vi":
        return content.deletemessage.vi;
      default:
        return content.deletemessage.en;
    }
  }

  renderDeleteMessageConfirm(language) {
    switch (language) {
      case "es":
        return content.deletemessageconfirm.es;
      case "zh":
        return content.deletemessageconfirm.zh;
      case "ar":
        return content.deletemessageconfirm.ar;
      case "fr":
        return content.deletemessageconfirm.fr;
      case "de":
        return content.deletemessageconfirm.de;
      case "hi":
        return content.deletemessageconfirm.hi;
      case "it":
        return content.deletemessageconfirm.it;
      case "ja":
        return content.deletemessageconfirm.ja;
      case "ko":
        return content.deletemessageconfirm.ko;
      case "ru":
        return content.deletemessageconfirm.ru;
      case "tl":
        return content.deletemessageconfirm.tl;
      case "te":
        return content.deletemessageconfirm.te;
      case "vi":
        return content.deletemessageconfirm.vi;
      default:
        return content.deletemessageconfirm.en;
    }
  }

  closeConfigShow = (closeOnEscape) => () => {
    this.setState({ closeOnEscape, open: true });
  }

  close = () => this.setState({ open: false });

  deleteMessageAndClose = () => {
    this.props.deleteMessage({ message: this.props.message, roomId: this.props.roomId })
    this.close();
  }

  render() {
    const { open, closeOnEscape } = this.state;
    return (
      <Modal
        trigger={<span className="cursor" id="delete" onClick={this.closeConfigShow(false, true)}>
          {this.renderDelete(this.props.user?.language)}
        </span>}
        basic
        open={open}
        closeOnEscape={closeOnEscape}
        onClose={this.close}
      >
        <Header content={this.renderDeleteMessage(this.props.user?.language)}
        />
        <Modal.Content>
          <p>{this.renderDeleteMessageConfirm(this.props.user?.language)}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            fluid
            negative
            onClick={() => this.deleteMessageAndClose()}>
            <Icon name='remove' />
            {this.renderDeleteMessage(this.props.user?.language)}
          </Button>
          <span className="cursor" id="delete" onClick={() => this.deleteMessageAndClose()}></span>
        </Modal.Actions>

      </Modal>
    );
  }
}

export default DeleteMessageModal;




