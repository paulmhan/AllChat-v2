import React from "react";
import { Grid, Header, List, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SocketLogo from "../../assets/images/Socket-IO-Logo.svg"
import SemanticLogo from "../../assets/images/semantic-ui-logo.png"
import ReactLogo from "../../assets/images/React-icon.png";
import ReduxLogo from "../../assets/images/Redux-logo.png";
import GoogleTranslateLogo from "../../assets/images/GoogleTranslate-logo.png";
import Paul from "../../assets/images/paul-profile.jpg";
import Suneetha from "../../assets/images/suneetha-profile.jpg";
import James from "../../assets/images/james-profile.jpg";


import "./style.css";

const Developers = props => (
    <>
        <Grid id="developers-container" divided>
            <Grid.Column width={7}>
                <Grid.Row>
                    <Grid.Column>
                        <Header id="powered" as="h1">Powered by:</Header>
                    </Grid.Column>
                </Grid.Row>
                <br />
                <Grid.Row centered>
                    <Grid>
                        <Grid.Column width={3}>
                            <Image id="socket" href="https://socket.io/" target=":blank" size="tiny" src={SocketLogo} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image id="semantic" href="https://react.semantic-ui.com/" target=":blank" size="tiny" src={SemanticLogo} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image id="react" size="tiny" src={ReactLogo} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image id="redux" size="tiny" src={ReduxLogo} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image id="google-translate" size="tiny" src={GoogleTranslateLogo} />
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
                <Grid.Row centered>
                    <Grid.Column>
                        <Header id="contact" as="h1">Contact:</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link to="/contact"><Header id="feedback" as="h3"><Icon name="envelope" />Send Feedback</Header></Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={5}>
                <Grid.Row>
                    <Grid.Column>
                        <Header id="developed" as="h1">Developers:</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column centered>
                        <Image href="https://github.com/paulmhan" target=":blank" id="paul" circular size="tiny" src={Paul} />
                        <Image href="https://github.com/suneethaburla" target=":blank" id="suneetha" circular size="tiny" src={Suneetha} />
                        <Image href="https://github.com/jpgeib" target=":blank" id="james" circular size="tiny" src={James} />
                    </Grid.Column>
                </Grid.Row>
            </Grid.Column>
        </Grid>







    </>
);

export default Developers;