import React, { Component } from "react";
import "./style.css";
import Footer from "../../components/Footer";
import LandingPageComputer from "./LandingPageComputer/index.js";
import LandingPageLargeScreen from "./LandingPageLargeScreen/index.js";
import LandingPageWideScreen from "./LandingPageWideScreen/index.js";
import LandingPageTablet from "./LandingPageTablet/index.js";
import LandingPageMobile from "./LandingPageMobile/index.js";

class LandingPage extends Component {

    render() {
        return (
            <>
                <LandingPageMobile isLoggedIn={this.props.isLoggedIn} />
                <LandingPageTablet isLoggedIn={this.props.isLoggedIn} />
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

