import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { required } from 'redux-form-validators';

class CreateRoomModal extends Component {

    state = {
        roomName:""
    }

    handleRoomNameChange = e => {
        const { value } = e.target;
        console.log(value);
        this.setState({ roomName: value });
    };


    render() {
        return (
            <Modal trigger={<Button content='Create Room' />}>
                <Modal.Header>Please Enter A Room Name</Modal.Header>
                <Modal.Content>
                        <Form.Input
                            fluid
                            onChange={this.handleRoomNameChange}
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
                        onClick={() => this.props.createRoom(this.state.roomName)}
                    />
                </Modal.Actions>
            </Modal>
        )
    }

};




export default CreateRoomModal;