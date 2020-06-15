import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { required } from 'redux-form-validators';
import content from "../../content.js";


import "./style.css";

class CreateRoomModal extends Component {

    state = {
        roomName: "",
        open: false
    }

    renderCreateRoom(language) {
        switch (language) {
            case "es":
                return content.create.es;
            case "zh":
                return content.create.zh;
            case "ar":
                return content.create.ar;
            case "fr":
                return content.create.fr;
            case "de":
                return content.create.de;
            case "hi":
                return content.create.hi;
            case "ja":
                return content.create.ja;
            case "ko":
                return content.create.ko;
            case "ru":
                return content.create.ru;
            case "tl":
                return content.create.tl;
            case "te":
                return content.create.te;
            case "vi":
                return content.create.vi;
            default:
                return content.create.en;
        }
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
            userId: this.props.user?._id
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
                        id="CreateRoomBtn-Outer"
                        content={this.renderCreateRoom(this.props.user?.language)}
                        onClick={this.closeConfigShow(false, true)}
                        size="massive"
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
                        id="CreateRoomBtn-Inner"
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