import React, { Component } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import { required } from "redux-form-validators";

class ChangeEmailModal extends Component {

    render() {
        return (
            <Modal
                trigger={
                    <Button size="medium" content="Change Email" />
                }
            >
                <Modal.Header>What is your new Email?</Modal.Header>
                <Modal.Content>
                    <Form.Input 
                        fluid
                        autoComplete="off" 
                        placeholder="Please enter your new email..."
                        validate={
                            [
                                required({ msg: 'You must provide an email' })
                            ]
                        }
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                        content="Change Email"
                        size="large"
                        type="submit"
                    />
                </Modal.Actions>
            </Modal>
        );
    }

} 

export default ChangeEmailModal;