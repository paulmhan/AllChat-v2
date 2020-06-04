import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";


class LandingPage extends Component {

    render() {
        return (
<<<<<<< HEAD

            <Grid id="landing-container">
                <Grid.Column width={8}>
                    <Grid container id="inner-landing-container">
                        <Grid.Row centered>
                            <h1 id="welcome">Welcome to AllChat!</h1>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column id="header" width={16}>
                                <h1 id="together">Bring People Together</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column id="text1" width={16}>
                                <h5 id="paragraph">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
                                With AllChat, you can talk to anyone across the world, even if you don't speak their language!
                                </h5>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={4}>
                                <Button as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid container>
                        <Grid.Row centered>
                            <img id="landing-page-image" src={require("../../assets/images/people-chatting.png")} />
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
=======
            <Grid container id="landing-container">
                <Grid.Row
                    // centered
                    columns={1}>
                    <h1 id="welcome">Welcome to AllChat!</h1>
                </Grid.Row>
                <Grid.Row
                    // centered
                    columns={1}>
                    <LandingBodyText />
                </Grid.Row>
                
>>>>>>> 9ef2f7b8f1ed7ffe69b1fc953607b947684b8417
            </Grid>

        )

    }
}

export default LandingPage;