import React from "react";
import { Grid, Header, List, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProfilePlaceholder from "../../assets/images/Tim_Allen_headshot.jpg"
import Paul from "../../assets/images/paul-profile.jpg";
import Suneetha from "../../assets/images/suneetha-profile.jpg";

import "./style.css";

const Developers = props => (
    <Grid id="developers-container" divided>
        <Grid.Column width={8}>

        </Grid.Column>
        <Grid.Column width={8}>
            <Grid.Row>
                <Grid.Column>
                    <Header id="contact" as="h1">Contact Us</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Link to="/contact"><Header id="feedback" as="h3"><Icon name="envelope" />Send Feedback</Header></Link>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Header id="developed" as="h1">Developed By</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Image id="paul" avatar circular size="tiny" src={Paul} />
                    <Image id="suneetha" avatar circular size="tiny" src={Suneetha} />
                    <Image id="james" avatar circular size="tiny" src={ProfilePlaceholder} />
                </Grid.Column>
            </Grid.Row>
        </Grid.Column>
    </Grid>
);

export default Developers;