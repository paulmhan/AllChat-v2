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
            case "it":
                return content.create.it;
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

    renderRoomName(language) {
        switch (language) {
            case "es":
                return content.roomname.es;
            case "zh":
                return content.roomname.zh;
            case "ar":
                return content.roomname.ar;
            case "fr":
                return content.roomname.fr;
            case "de":
                return content.roomname.de;
            case "hi":
                return content.roomname.hi;
            case "it":
                return content.roomname.it;
            case "ja":
                return content.roomname.ja;
            case "ko":
                return content.roomname.ko;
            case "ru":
                return content.roomname.ru;
            case "tl":
                return content.roomname.tl;
            case "te":
                return content.roomname.te;
            case "vi":
                return content.roomname.vi;
            default:
                return content.roomname.en;
        }
    }

    renderPlaceholder(language) {
        switch (language) {
            case "es":
                return content.placeholder.es;
            case "zh":
                return content.placeholder.zh;
            case "ar":
                return content.placeholder.ar;
            case "fr":
                return content.placeholder.fr;
            case "de":
                return content.placeholder.de;
            case "hi":
                return content.placeholder.hi;
            case "it":
                return content.placeholder.it;
            case "ja":
                return content.placeholder.ja;
            case "ko":
                return content.placeholder.ko;
            case "ru":
                return content.placeholder.ru;
            case "tl":
                return content.placeholder.tl;
            case "te":
                return content.placeholder.te;
            case "vi":
                return content.placeholder.vi;
            default:
                return content.placeholder.en;
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
        console.log("hello");
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
                <Modal.Header>{this.renderRoomName(this.props.user?.language)}</Modal.Header>
                <Modal.Content>
                    <Form.Input
                        fluid
                        onKeyPress={this.keyPressed}
                        onChange={this.handleRoomNameChange}
                        autoComplete='off'
                        placeholder={this.renderPlaceholder(this.props.user?.language)}
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
                        content={this.renderCreateRoom(this.props.user?.language)}
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