import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import SignUp from "../../containers/SignUp";

class SignUpModal extends Component {

    render() {
        return(
            <Modal
            size="small"
            trigger={
                <Button 
                    size="massive"
                    id="SignUpBtn"
                    content="Don't have an account? Sign up and start chatting!"
                />
            }
            >
                <Modal.Header>Please enter your e-mail and password</Modal.Header>
                <Modal.Content><SignUp /></Modal.Content>
            </Modal>
        );
    }
};

export default SignUpModal;