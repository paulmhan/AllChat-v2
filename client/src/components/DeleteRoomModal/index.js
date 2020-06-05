import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class DeleteRoomModal extends Component {

  state = {
    open: false
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
        trigger={<Button onClick={this.closeConfigShow(false, true)} color='red' icon='archive' size='small' />}
        basic
        open={open}
        closeOnEscape={closeOnEscape}
        onClose={this.close}
      >
        <Header content='Delete Room' />
        <Modal.Content>
          <p>Are you sure you want to delete this room?</p>
          <p>{this.props.text}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            fluid
            negative
            onClick={() => this.deleteRoomAndClose()}>
            <Icon name='remove' /> Delete
      </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteRoomModal;




