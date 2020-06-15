import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import content from "../../content.js";


import "./style.css";

class DeleteRoomModal extends Component {

  state = {
    open: false
  }

  renderDeleteRoom(language) {
    switch (language) {
      case "es":
        return content.deleteroom.es;
      case "zh":
        return content.deleteroom.zh;
      case "ar":
        return content.deleteroom.ar;
      case "fr":
        return content.deleteroom.fr;
      case "de":
        return content.deleteroom.de;
      case "hi":
        return content.deleteroom.hi;
      case "it":
        return content.deleteroom.it;
      case "ja":
        return content.deleteroom.ja;
      case "ko":
        return content.deleteroom.ko;
      case "ru":
        return content.deleteroom.ru;
      case "tl":
        return content.deleteroom.tl;
      case "te":
        return content.deleteroom.te;
      case "vi":
        return content.deleteroom.vi;
      default:
        return content.deleteroom.en;
    }
  }

  renderConfirmDeleteRoom(language) {
    switch (language) {
      case "es":
        return content.confirmdeleteroom.es;
      case "zh":
        return content.confirmdeleteroom.zh;
      case "ar":
        return content.confirmdeleteroom.ar;
      case "fr":
        return content.confirmdeleteroom.fr;
      case "de":
        return content.confirmdeleteroom.de;
      case "hi":
        return content.confirmdeleteroom.hi;
      case "it":
        return content.confirmdeleteroom.it;
      case "ja":
        return content.confirmdeleteroom.ja;
      case "ko":
        return content.confirmdeleteroom.ko;
      case "ru":
        return content.confirmdeleteroom.ru;
      case "tl":
        return content.confirmdeleteroom.tl;
      case "te":
        return content.confirmdeleteroom.te;
      case "vi":
        return content.confirmdeleteroom.vi;
      default:
        return content.confirmdeleteroom.en;
    }
  }

  closeConfigShow = (closeOnEscape) => () => {
    this.setState({ closeOnEscape, open: true });
  }

  close = () => this.setState({ open: false });

  deleteRoomAndClose = () => {
    this.props.deleteRoom(this.props.id);
    this.close();
  }

  render() {
    const { open, closeOnEscape } = this.state;
    return (
      <Modal
        trigger={<Button id="DeleteRoomBtn-Outer" onClick={this.closeConfigShow(false, true)} icon='archive' size='small' />}
        basic
        open={open}
        closeOnEscape={closeOnEscape}
        onClose={this.close}
      >
        <Header content={this.renderDeleteRoom(this.props.user?.language)} />
        <Modal.Content>
          <p>{this.renderConfirmDeleteRoom(this.props.user?.language)}</p>
          <p>{this.props.text}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            fluid
            negative
            onClick={() => this.deleteRoomAndClose()}>
            <Icon name='remove' />
            {this.renderDeleteRoom(this.props.user?.language)}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteRoomModal;




