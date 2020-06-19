import React, { Component } from "react";
import { connect } from 'react-redux';
import Footer from "../../components/Footer";
import LandingPageComputer from "./LandingPageComputer/index.js";
import LandingPageLargeScreen from "./LandingPageLargeScreen/index.js";
import LandingPageWideScreen from "./LandingPageWideScreen/index.js";
import LandingPageTablet from "./LandingPageTablet/index.js";
import LandingPageMobile from "./LandingPageMobile/index.js";
import { loadUser } from "../../actions/auth";
import "./style.css";

class LandingPage extends Component {
    async componentDidMount() {
        this.props.user || await this.props.loadUser();
    }

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

function mapStateToProps(state) {
    return {
        user: state.auth.currentUser,
    }
}


export default connect(mapStateToProps, { loadUser })(LandingPage)

