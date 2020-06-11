import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import ChangeNameModal from "../../components/ChangeNameModal";
import ChangeEmailModal from "../../components/ChangeEmailModal";
import ProfilePic from "../../assets/images/Tim_Allen_headshot.jpg";

import "./style.css";

class UserProfile extends Component {
    render() {
        return (
            <Grid id="profile-container">
                <Grid.Row centered>
                    <Image circular src={ProfilePic} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h1>Name: Tim Allen</h1>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <ChangeNameModal />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h1>Email: home@improvement.com</h1>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ChangeEmailModal />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default UserProfile;