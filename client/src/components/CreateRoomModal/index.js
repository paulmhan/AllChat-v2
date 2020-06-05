import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { required } from 'redux-form-validators';

class CreateRoomModal extends Component {

    state = {
        roomName: "",
        open: false
    }

    closeConfigShow = (closeOnEscape) => () => {
        this.setState({ closeOnEscape, open: true });
    }

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

    createRoomAndClose = () => {
        this.createRoom(); 
        this.close();
    }

    keyPressed = (event) => {
        if(event.key === "Enter") {
            this.createRoomAndClose();
        }
    }

    render() {
        
        const { open, closeOnEscape } = this.state;

        return (
            <Modal
                trigger={
                    <Button
                        content='Create Room'
                        onClick={this.closeConfigShow(false, true)}
                    />
                }
                open={open}
                closeOnEscape={closeOnEscape}
                onClose={this.close}
                >
                <Modal.Header>Please Enter A Room Name</Modal.Header>
                <Modal.Content>
                    <Form.Input
                        fluid
                        onKeyPress={this.keyPressed}
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
                        onClick={() => this.createRoomAndClose()}
                        
                    />
                </Modal.Actions>
            </Modal>
        )
    }

};




export default CreateRoomModal;