import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import "./style.css";

class DeleteMessageModal extends Component {

  state = {
    open: false
  }

  closeConfigShow = (closeOnEscape) => () => {
    this.setState({ closeOnEscape, open: true });
  }

  close = () => this.setState({ open: false });

  deleteMessageAndClose = () => {
    this.props.deleteMessage({ message:this.props.message, roomId:this.props.roomId })
    this.close();
  }

  render() {
    const { open, closeOnEscape } = this.state;
    return (
      <Modal
        trigger={<a id="delete" href="#" onClick={this.closeConfigShow(false, true)}>Delete</a>}
        basic
        open={open}
        closeOnEscape={closeOnEscape}
        onClose={this.close}
      >
        <Header content='Delete Message' />
        <Modal.Content>
          <p>Are you sure you want to delete this message?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            fluid
            negative
            onClick={() => this.deleteMessageAndClose()}>
            <Icon name='remove' /> Delete
      </Button>
      <a id="delete" href="#" onClick={() => this.deleteMessageAndClose()}></a>
        </Modal.Actions>
        
      </Modal>
    );
  }
}

export default DeleteMessageModal;




