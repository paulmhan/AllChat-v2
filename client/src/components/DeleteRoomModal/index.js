import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default (props) => (
  <Modal
    trigger={ <Button color='red' icon='archive' size='small'/> }
    basic
  >
    <Header content='Delete Room'/> 
    <Modal.Content>
      <p>Are you sure you want to delete this room?</p>
      <p>{props.text}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        fluid
        negative
        onClick={ () => props.deleteRoom(props.id)}>
        <Icon name='remove'/> Delete
      </Button>
    </Modal.Actions>
  </Modal>
);

