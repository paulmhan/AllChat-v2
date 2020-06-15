import React, { Component } from "react";
import { Grid, Header, List, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import content from "../../content.js";
import SocketLogo from "../../assets/images/Socket-IO-Logo.svg"
import SemanticLogo from "../../assets/images/semantic-ui-logo.png"
import ReactLogo from "../../assets/images/React-icon.png";
import ReduxLogo from "../../assets/images/Redux-logo.png";
import GoogleTranslateLogo from "../../assets/images/GoogleTranslate-logo.png";
import Paul from "../../assets/images/paul-profile.jpg";
import Suneetha from "../../assets/images/suneetha-profile.jpg";
import James from "../../assets/images/james-profile.jpg";


import "./style.css";

class Developers extends Component {

    renderPower(language) {
        switch (language) {
            case "es":
                return content.power.es;
            case "zh":
                return content.power.zh;
            case "ar":
                return content.power.ar;
            case "fr":
                return content.power.fr;
            case "de":
                return content.power.de;
            case "hi":
                return content.power.hi;
            case "ja":
                return content.power.ja;
            case "ko":
                return content.power.ko;
            case "ru":
                return content.power.ru;
            case "tl":
                return content.power.tl;
            case "te":
                return content.power.te;
            case "vi":
                return content.power.vi;
            default:
                return content.power.en;
        };
    }

    renderContant(language) {
        switch (language) {
            case "es":
                return content.contact.es;
            case "zh":
                return content.contact.zh;
            case "ar":
                return content.contact.ar;
            case "fr":
                return content.contact.fr;
            case "de":
                return content.contact.de;
            case "hi":
                return content.contact.hi;
            case "ja":
                return content.contact.ja;
            case "ko":
                return content.contact.ko;
            case "ru":
                return content.contact.ru;
            case "tl":
                return content.contact.tl;
            case "te":
                return content.contact.te;
            case "vi":
                return content.contact.vi;
            default:
                return content.contact.en;
        };
    }

    renderFeedback(language) {
        switch (language) {
            case "es":
                return content.feedback.es;
            case "zh":
                return content.feedback.zh;
            case "ar":
                return content.feedback.ar;
            case "fr":
                return content.feedback.fr;
            case "de":
                return content.feedback.de;
            case "hi":
                return content.feedback.hi;
            case "ja":
                return content.feedback.ja;
            case "ko":
                return content.feedback.ko;
            case "ru":
                return content.feedback.ru;
            case "tl":
                return content.feedback.tl;
            case "te":
                return content.feedback.te;
            case "vi":
                return content.feedback.vi;
            default:
                return content.feedback.en;
        };
    }

    renderDevelopers(language) {
        switch (language) {
            case "es":
                return content.developers.es;
            case "zh":
                return content.developers.zh;
            case "ar":
                return content.developers.ar;
            case "fr":
                return content.developers.fr;
            case "de":
                return content.developers.de;
            case "hi":
                return content.developers.hi;
            case "ja":
                return content.developers.ja;
            case "ko":
                return content.developers.ko;
            case "ru":
                return content.developers.ru;
            case "tl":
                return content.developers.tl;
            case "te":
                return content.developers.te;
            case "vi":
                return content.developers.vi;
            default:
                return content.developers.en;
        };
    }

    render(){
        return(
            <>
                <Grid id="developers-container" divided>
                    <Grid.Column width={7}>
                        <Grid.Row>
                            <Grid.Column>
                                <Header id="powered" as="h1">{this.renderPower(this.props.user?.language)}</Header>
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
                                <Header id="contact" as="h1">{this.renderPower(this.props.user?.language)}</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Link to="/contact"><Header id="feedback" as="h3"><Icon name="envelope" />{this.renderFeedback(this.props.user?.language)}</Header></Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Grid.Row>
                            <Grid.Column>
                                <Header id="developed" as="h1">{this.renderDevelopers(this.props.user?.language)}</Header>
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
    }
} 

export default Developers;