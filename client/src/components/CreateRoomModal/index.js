import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { required } from 'redux-form-validators';

class CreateRoomModal extends Component {

    state = {
        roomName: "",
        open: false
    }

    open = () => this.setState({ open: true });
    close = () => this.setState({ open: false });

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
    }


    render() {
        return (
            <Modal
                onOpen={this.open}
                onClose={this.close}
                trigger={<Button content='Create Room' />}>
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
                        onKeyDown={this.handleEnter}
                    />
                </Modal.Actions>
            </Modal>
        )
    }

};




export default CreateRoomModal;