import React, { Component } from "react";
import { Responsive, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";


class LandingPage extends Component {

    render() {
        return (
        <>
            <Responsive
                {...Responsive.onlyMobile}
                {...Responsive.onlyTablet}
                as={Grid}
                id="landing-container">
                <Responsive
                    {...Responsive.onlyMobile}
                    {...Responsive.onlyTablet}
                    as={Grid.Column}
                    width={8}>
                    <Responsive
                        {...Responsive.onlyMobile}
                        {...Responsive.onlyTablet}
                        as={Grid} container
                        id="inner-landing-container">
                        <Responsive
                            {...Responsive.onlyMobile}
                            {...Responsive.onlyTablet}
                            as={Grid.Row}
                            centered>
                            <h1 id="welcome">Welcome to AllChat!</h1>
                        </Responsive>
                        <Responsive
                            {...Responsive.onlyMobile}
                            {...Responsive.onlyTablet}
                            as={Grid.Row}
                            centered>
                            <Responsive
                                {...Responsive.onlyMobile}
                                {...Responsive.onlyTablet}
                                as={Grid.Column}
                                id="header" width={16}>
                                <h1 id="together">Bring People Together</h1>
                            </Responsive>
                        </Responsive>
                        <Responsive
                            {...Responsive.onlyMobile}
                            {...Responsive.onlyTablet}
                            as={Grid.Row}
                            centered>
                            <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} as={Grid.Column} id="text1" width={16}>
                                <h5 id="paragraph">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
                                With AllChat, you can talk to anyone across the world, even if you don't speak their language!
                                </h5>
                            </Responsive>
                        </Responsive>
                        <Responsive
                            {...Responsive.onlyMobile}
                            {...Responsive.onlyTablet}
                            as={Grid.Row}
                            centered>
                            <Responsive
                                {...Responsive.onlyMobile}
                                {...Responsive.onlyTablet}
                                as={Grid.Column}
                                width={4}>
                                <Button as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive
                    {...Responsive.onlyMobile}
                    {...Responsive.onlyTablet}
                    as={Grid.Column}
                    width={8}>
                    <Responsive
                        {...Responsive.onlyMobile}
                        {...Responsive.onlyTablet}
                        as={Grid}
                        container>
                        <Responsive
                            {...Responsive.onlyMobile}
                            {...Responsive.onlyTablet}
                            as={Grid.Row}
                            centered>
                            <img id="landing-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
                        </Responsive>
                    </Responsive>
                </Responsive>
            </Responsive>
            
            <Responsive
                {...Responsive.onlyComputer}
                {...Responsive.onlyLargeScreen}
                {...Responsive.onlyWideScreen}
                as={Grid}
                id="landing-container">
                <Responsive
                    {...Responsive.onlyComputer}
                    {...Responsive.onlyLargeScreen}
                    {...Responsive.onlyWideScreen}
                    as={Grid.Column}
                    width={8}>
                    <Responsive
                        {...Responsive.onlyComputer}
                        {...Responsive.onlyLargeScreen}
                        {...Responsive.onlyWideScreen}
                        as={Grid} container
                        id="inner-landing-container">
                        <Responsive
                            {...Responsive.onlyComputer}
                            {...Responsive.onlyLargeScreen}
                            {...Responsive.onlyWideScreen}
                            as={Grid.Row}
                            centered>
                            <h1 id="welcome">Welcome to AllChat!</h1>
                        </Responsive>
                        <Responsive
                            {...Responsive.onlyComputer}
                            {...Responsive.onlyLargeScreen}
                            {...Responsive.onlyWideScreen}
                            as={Grid.Row}
                            centered>
                            <Responsive
                                {...Responsive.onlyComputer}
                                {...Responsive.onlyLargeScreen}
                                {...Responsive.onlyWideScreen}
                                as={Grid.Column}
                                id="header" width={16}>
                                <h1 id="together">Bring People Together</h1>
                            </Responsive>
                        </Responsive>
                        <Responsive
                            {...Responsive.onlyComputer}
                            {...Responsive.onlyLargeScreen}
                            {...Responsive.onlyWideScreen}
                            as={Grid.Row}
                            centered>
                            <Responsive
                                {...Responsive.onlyComputer} 
                                {...Responsive.onlyLargeScreen} 
                                {...Responsive.onlyWideScreen}
                                as={Grid.Column} 
                                id="text1" 
                                width={16}>
                                <h5 id="paragraph">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
                                With AllChat, you can talk to anyone across the world, even if you don't speak their language!
                                </h5>
                            </Responsive>
                        </Responsive>
                        <Responsive
                            {...Responsive.onlyComputer}
                            {...Responsive.onlyLargeScreen}
                            {...Responsive.onlyWideScreen}
                            as={Grid.Row}
                            centered>
                            <Responsive
                                {...Responsive.onlyComputer}
                                {...Responsive.onlyLargeScreen}
                                {...Responsive.onlyWideScreen}
                                as={Grid.Column}
                                width={4}>
                                <Button as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive
                    {...Responsive.onlyComputer}
                    {...Responsive.onlyLargeScreen}
                    {...Responsive.onlyWideScreen}
                    as={Grid.Column}
                    width={8}>
                    <Responsive
                        {...Responsive.onlyComputer}
                        {...Responsive.onlyLargeScreen}
                        {...Responsive.onlyWideScreen}
                        as={Grid}
                        container>
                        <Responsive
                            {...Responsive.onlyComputer}
                            {...Responsive.onlyLargeScreen}
                            {...Responsive.onlyWideScreen}
                            as={Grid.Row}
                            centered>
                            <img id="landing-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
                        </Responsive>
                    </Responsive>
                </Responsive>
            </Responsive>
        </>
        )

    }
}

export default LandingPage;