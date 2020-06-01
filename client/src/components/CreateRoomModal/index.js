import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { required } from 'redux-form-validators';

class CreateRoomModal extends Component {

    state = {
        roomName:""
    }

    handleRoomNameChange = e => {
        const { value } = e.target;
        this.setState({ roomName: value });
    };

    createRoom = () => {
        const data = {
            roomName: this.state.roomName,
            userId: this.props.userId
        }
        this.props.createRoom(data);
        // this.setState({ roomName: "" });
        // this.props.getAllRooms(data.roomName);
    }


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
                        onClick={() => this.createRoom()}
                    />
                </Modal.Actions>
            </Modal>
        )
    }

};




export default CreateRoomModal;