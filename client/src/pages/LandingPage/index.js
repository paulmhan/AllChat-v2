import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import LandingBodyText from "../../components/LandingBodyText"
// import LandingPageModal from "../../containers/LandingPageModal";
import "./style.css";
import SignUp from "../../containers/SignUp";
import SignIn from "../../containers/SignIn";


class LandingPage extends Component {

    render() {
        return (
            <Grid container id="landing-container">
                <Grid.Row
                    centered
                    columns={1}>
                    <h1 id="welcome">Welcome to AllChat!</h1>
                </Grid.Row>
                <Grid.Row
                    centered
                    columns={1}>
                    <LandingBodyText />
                </Grid.Row>
                <Grid.Row
                    centered
                    columns={1}>
                    <SignUp />
                    <SignIn />
                   {/* <LandingPageModal socket={this.props.socket} /> */}
                </Grid.Row>
            </Grid>
        )

    }
}

export default LandingPage;