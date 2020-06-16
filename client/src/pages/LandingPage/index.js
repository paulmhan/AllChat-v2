import React, { Component } from "react";
import { Grid, Button, Image, Header, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import content from "../../content.js";
import Developers from "../../components/Developers";
import PeopleChatting from "../../assets/images/people-chatting.png";
import AllChatDemo1 from "../../assets/gifs/AllChat-demo1.gif";
import AllChatDemo2 from "../../assets/gifs/AllChat-demo2.gif";
import { loadUser } from "../../actions/auth";
import { connect } from 'react-redux';
import { compose } from "redux";
import "./style.css";


class LandingPage extends Component {

    async componentDidMount() {
        this.props.user || await this.props.loadUser();
    }

    renderWelcome(language) {
        switch (language) {
            case "es":
                return content.welcome.es;
            case "zh":
                return content.welcome.zh;
            case "ar":
                return content.welcome.ar;
            case "fr":
                return content.welcome.fr;
            case "de":
                return content.welcome.de;
            case "hi":
                return content.welcome.hi;
            case "it":
                return content.welcome.it;
            case "ja":
                return content.welcome.ja;
            case "ko":
                return content.welcome.ko;
            case "ru":
                return content.welcome.ru;
            case "tl":
                return content.welcome.tl;
            case "te":
                return content.welcome.te;
            case "vi":
                return content.welcome.vi;
            default:
                return content.welcome.en;
        }
    }

    renderBring(language) {
        switch (language) {
            case "es":
                return content.bring.es;
            case "zh":
                return content.bring.zh;
            case "ar":
                return content.bring.ar;
            case "fr":
                return content.bring.fr;
            case "de":
                return content.bring.de;
            case "hi":
                return content.bring.hi;
            case "it":
                return content.bring.it;
            case "ja":
                return content.bring.ja;
            case "ko":
                return content.bring.ko;
            case "ru":
                return content.bring.ru;
            case "tl":
                return content.bring.tl;
            case "te":
                return content.bring.te;
            case "vi":
                return content.bring.vi;
            default:
                return content.bring.en;
        };
    }

    renderParagraph(language) {
        switch (language) {
            case "es":
                return content.landingpage.es;
            case "zh":
                return content.landingpage.zh;
            case "ar":
                return content.landingpage.ar;
            case "fr":
                return content.landingpage.fr;
            case "de":
                return content.landingpage.de;
            case "hi":
                return content.landingpage.hi;
            case "it":
                return content.landingpage.it;
            case "ja":
                return content.landingpage.ja;
            case "ko":
                return content.landingpage.ko;
            case "ru":
                return content.landingpage.ru;
            case "tl":
                return content.landingpage.tl;
            case "te":
                return content.landingpage.te;
            case "vi":
                return content.landingpage.vi;
            default:
                return content.landingpage.en;
        };
    }

    renderStart(language) {
        switch (language) {
            case "es":
                return content.start.es;
            case "zh":
                return content.start.zh;
            case "ar":
                return content.start.ar;
            case "fr":
                return content.start.fr;
            case "de":
                return content.start.de;
            case "hi":
                return content.start.hi;
            case "it":
                return content.start.it;
            case "ja":
                return content.start.ja;
            case "ko":
                return content.start.ko;
            case "ru":
                return content.start.ru;
            case "tl":
                return content.start.tl;
            case "te":
                return content.start.te;
            case "vi":
                return content.start.vi;
            default:
                return content.start.en;
        };
    }

    renderDemo(language) {
        switch (language) {
            case "es":
                return content.demo.es;
            case "zh":
                return content.demo.zh;
            case "ar":
                return content.demo.ar;
            case "fr":
                return content.demo.fr;
            case "de":
                return content.demo.de;
            case "hi":
                return content.demo.hi;
            case "it":
                return content.demo.it;
            case "ja":
                return content.demo.ja;
            case "ko":
                return content.demo.ko;
            case "ru":
                return content.demo.ru;
            case "tl":
                return content.demo.tl;
            case "te":
                return content.demo.te;
            case "vi":
                return content.demo.vi;
            default:
                return content.demo.en;
        };
    }

    renderDemoParagraph(language) {
        switch (language) {
            case "es":
                return content.par.es;
            case "zh":
                return content.par.zh;
            case "ar":
                return content.par.ar;
            case "fr":
                return content.par.fr;
            case "de":
                return content.par.de;
            case "hi":
                return content.par.hi;
            case "it":
                return content.par.it;
            case "ja":
                return content.par.ja;
            case "ko":
                return content.par.ko;
            case "ru":
                return content.par.ru;
            case "tl":
                return content.par.tl;
            case "te":
                return content.par.te;
            case "vi":
                return content.par.vi;
            default:
                return content.par.en;
        };
    }

    renderDemoParagraph2(language) {
        switch (language) {
            case "es":
                return content.par2.es;
            case "zh":
                return content.par2.zh;
            case "ar":
                return content.par2.ar;
            case "fr":
                return content.par2.fr;
            case "de":
                return content.par2.de;
            case "hi":
                return content.par2.hi;
            case "it":
                return content.par2.it;
            case "ja":
                return content.par2.ja;
            case "ko":
                return content.par2.ko;
            case "ru":
                return content.par2.ru;
            case "tl":
                return content.par2.tl;
            case "te":
                return content.par2.te;
            case "vi":
                return content.par2.vi;
            default:
                return content.par2.en;
        };
    }

    renderTranslateHeader(language) {
        switch (language) {
            case "es":
                return content.tran.es;
            case "zh":
                return content.tran.zh;
            case "ar":
                return content.tran.ar;
            case "fr":
                return content.tran.fr;
            case "de":
                return content.tran.de;
            case "hi":
                return content.tran.hi;
            case "it":
                return content.tran.it;
            case "ja":
                return content.tran.ja;
            case "ko":
                return content.tran.ko;
            case "ru":
                return content.tran.ru;
            case "tl":
                return content.tran.tl;
            case "te":
                return content.tran.te;
            case "vi":
                return content.tran.vi;
            default:
                return content.tran.en;
        };
    }

    renderTranslatePar(language) {
        switch (language) {
            case "es":
                return content.tranpar.es;
            case "zh":
                return content.tranpar.zh;
            case "ar":
                return content.tranpar.ar;
            case "fr":
                return content.tranpar.fr;
            case "de":
                return content.tranpar.de;
            case "hi":
                return content.tranpar.hi;
            case "it":
                return content.tranpar.it;
            case "ja":
                return content.tranpar.ja;
            case "ko":
                return content.tranpar.ko;
            case "ru":
                return content.tranpar.ru;
            case "tl":
                return content.tranpar.tl;
            case "te":
                return content.tranpar.te;
            case "vi":
                return content.tranpar.vi;
            default:
                return content.tranpar.en;
        };
    }


    render() {
        return (
            <>
                <Grid id="landing-container">
                    <Grid.Column width={8}>
                        <Grid container id="inner-landing-container">
                            <Grid.Row centered>
                                <h1 id="welcome">
                                    {this.renderWelcome(this.props.user?.language)}
                                </h1>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column id="header" width={16}>
                                    <h1 id="together">
                                        {this.renderBring(this.props.user?.language)}
                                    </h1>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column id="text1" width={16}>
                                    <h5 id="paragraph">
                                        {this.renderParagraph(this.props.user?.language)}
                                    </h5>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={5}>
                                    {this.props.isLoggedIn ? <Button fluid as={Link} to='/rooms' size="massive" id="get-started">
                                        {this.renderStart(this.props.user?.language)}
                                    </Button> : <Button fluid as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Image fluid id="landing-page-image" alt="people-chatting" src={PeopleChatting} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>

                <Grid id="demo-container">
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Image fluid id="chat-gif" alt="chat-gif" src={AllChatDemo1} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Header as="h1" id="demo-header">{this.renderDemo(this.props.user?.language)}</Header>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Header id="demo-subheader1" as="h4">
                                    {this.renderDemoParagraph(this.props.user?.language)}
                                    </Header>
                                    <Header id="demo-subheader2" as="h4">
                                    {this.renderDemoParagraph2(this.props.user?.language)}
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>

                <Grid id="translate-demo-container">
                    <Grid.Column width={8}>
                        <Grid container>
                            <Grid.Row centered>
                                <Header as="h1" id="translate-demo-header">{this.renderTranslateHeader(this.props.user?.language)}</Header>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Header id="translate-demo-subheader" as="h4">
                                {this.renderTranslatePar(this.props.user?.language)}
                                </Header>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid.Row centered>
                            <Image fluid id="translate-gif" alt="translate-gif" src={AllChatDemo2} />
                        </Grid.Row>
                    </Grid.Column>
                </Grid>

                <footer id="developers-footer">
                    <Developers user={this.props.user}/>
                </footer>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.currentUser
    }
}

export default compose(
    connect(mapStateToProps, { loadUser }),
)(LandingPage)
