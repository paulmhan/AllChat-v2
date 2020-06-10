import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import ProfilePic from "../../assets/images/Tim_Allen_headshot.jpg";

import "./style.css";

class UserProfile extends Component {
    render() {
        return (
            <Grid id="profile-container">
                <Grid.Row centered>
                    <Image circular src={ProfilePic} />
                </Grid.Row>
                <Grid.Row centered>
                        <h1>Name: Tim Allen</h1>
                </Grid.Row>
                <Grid.Row centered>
                        <h1>Email: home@improvement.com</h1>
                </Grid.Row>
            </Grid>
        );

    }
}

export default UserProfile;