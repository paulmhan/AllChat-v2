import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { required } from 'redux-form-validators';
import { subscribeToMessageFromServer, sendMessage } from "../../actions/sockets";

class CreateRoomModal extends Component {

    createRoom = () => {
        console.log("hello");
    }

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
                        type="submit"
                        onClick={() => this.createRoom()}
                    />
                </Modal.Actions>
            </Modal>
        )
    }

};

export default CreateRoomModal;