import React, { Component } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import { required } from "redux-form-validators";

class ChangeNameModal extends Component {

    render() {
        return (
            <Modal
                trigger={
                    <Button size="medium" content="Change Name" />
                }
            >
                <Modal.Header>What is your new name?</Modal.Header>
                <Modal.Content>
                    <Form.Input 
                        fluid
                        autoComplete="off" 
                        placeholder="Please enter your new name..."
                        validate={
                            [
                                required({ msg: 'You must provide a name' })
                            ]
                        }
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                        content="Change Name"
                        size="large"
                        type="submit"
                    />
                </Modal.Actions>
            </Modal>
        );
    }

} 

export default ChangeNameModal;