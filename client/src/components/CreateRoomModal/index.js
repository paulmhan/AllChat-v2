import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';

class CreateRoomModal extends Component {

    render() {
        return (
            <Modal trigger={<Button content='Create Room' />}>
                <Modal.Header>Please Enter A Room Name</Modal.Header>
                <Modal.Content>
                        <Form.Input
                            fluid
                            autoComplete='off'
                            placeholder='Enter room name...'
                            validate={
                                [
                                    required({ msg: 'You must provide a room name' })
                                ]
                            }
                        />
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                        content='Create Room'
                        size='large'
                        color='blue'
                    />
                </Modal.Actions>
            </Modal>
        )
    }

};

export default CreateRoomModal;