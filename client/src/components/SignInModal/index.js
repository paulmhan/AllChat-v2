import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import SignIn from "../../containers/SignIn";

class SignInModal extends Component {

    render() {
        return(
            <Modal
            size="small"
            trigger={
                <Button 
                    size="small"
                    id="SignInBtn"
                    content="Already have an account? Sign in."
                />
            }
            >
                <Modal.Header>Please enter your e-mail and password</Modal.Header>
                <Modal.Content><SignIn /></Modal.Content>
            </Modal>
        );
    }
};

export default SignInModal;