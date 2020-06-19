import React, { Component } from "react";
import { Grid, Button, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import content from "../../content.js";
import "./style.css";
import Footer from "../../components/Footer";
import PeopleChatting from "../../assets/images/people-chatting-text.png";
import AllChatDemo1 from "../../assets/gifs/AllChat-demo4.gif";
import AllChatDemo2 from "../../assets/gifs/AllChat-demo5.gif";
import { loadUser } from "../../actions/auth";
import { connect } from 'react-redux';
import { compose } from "redux";
import LandingPageComputer from "./LandingPageComputer/index.js";
import LandingPageLargeScreen from "./LandingPageLargeScreen/index.js";
import LandingPageWideScreen from "./LandingPageWideScreen/index.js";

class LandingPage extends Component {

    render() {
        return (
            <>
                <LandingPageComputer isLoggedIn={this.props.isLoggedIn} />
                <LandingPageLargeScreen isLoggedIn={this.props.isLoggedIn} />
                <LandingPageWideScreen isLoggedIn={this.props.isLoggedIn} />

                <footer id="developers-footer">
                    <Footer user={this.props.user} />
                </footer>
            </>
        )

    }

}

export default LandingPage;

