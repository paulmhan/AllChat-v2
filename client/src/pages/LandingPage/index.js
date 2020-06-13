import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import content from "../../content.js";
import "./style.css";
import Developers from "../../components/Developers";
import { loadUser } from "../../actions/auth";
import { connect } from 'react-redux';
import { compose } from "redux";


class LandingPage extends Component {

    async componentDidMount() {
        this.props.user || await this.props.loadUser();
    }

    renderSwitch(language){
        switch(language){
            case "es":
                return content.landingpage.es;
            case "zh":
                return content.landingpage.zh;
            case "ar":
                return content.landingpage.ar;
            case "nl":
                return content.landingpage.nl;
            case "fr":
                return content.landingpage.fr;
            case "de":
                return content.landingpage.de;
            case "hi":
                return content.landingpage.hi;
            case "ja":
                return content.landingpage.ja;
            case "ko":
                return content.landingpage.ko;
            case "ru":
                return content.landingpage.ru;
            case "vi":
                return content.landingpage.vi;
            default:
                return content.landingpage.en;
        }
    }

    render() {
        return (
        <>
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
                                <h5 id="paragraph">
                                    {this.renderSwitch(this.props.user?.language)}
                                </h5>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={5}>
                                {this.props.isLoggedIn ? null : <Button fluid as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>}
                            </Grid.Column>
                        </Grid.Row>


                    </Grid>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid container>
                        <Grid.Row centered>
                            <img id="landing-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>

            <footer id="developers-footer">
                <Developers />
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


// import React, { Component } from "react";
// import { Responsive, Grid, Button } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// import "./style.css";


// class LandingPage extends Component {

//     render() {
//         // console.log(Responsive.onlyMobile);
//         // // Responsive.onlyComputer.minWidth = 750;
//         // // Responsive.onlyComputer.maxWidth = 750;
//         // console.log(Responsive.onlyComputer)
//         return (
//             <>
//                 <Responsive
//                     {...Responsive.onlyMobile}
//                     as={Grid}
//                     id="landing-container-mobile">
//                     <Responsive
//                         {...Responsive.onlyMobile}
//                         as={Grid.Column}
//                         width={16}>
//                         <Responsive
//                             {...Responsive.onlyMobile}
//                             as={Grid} container
//                             id="inner-landing-container-mobile">
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <h1 id="welcome-mobile">Welcome to AllChat!</h1>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyMobile}
//                                     as={Grid.Column}
//                                     id="header-mobile" width={16}>
//                                     <h1 id="together-mobile">Bring People Together</h1>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <img id="landing-page-image-mobile" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive {...Responsive.onlyMobile} as={Grid.Column} id="text1-mobile" width={16}>
//                                     <h5 id="paragraph-mobile">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                     With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyMobile}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyMobile}
//                                     as={Grid.Column}
//                                     width={16}>
//                                     <Button fluid as={Link} to='/signup' size="massive" id="get-started-mobile">Get Started</Button>
//                                 </Responsive>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>

//                 <Responsive
//                     {...Responsive.onlyTablet}
//                     as={Grid}
//                     id="landing-container-tablet">
//                     <Responsive
//                         {...Responsive.onlyTablet}
//                         as={Grid.Column}
//                         width={16}>
//                         <Responsive
//                             {...Responsive.onlyTablet}
//                             as={Grid} container
//                             id="inner-landing-container-tablet">
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <h1 id="welcome-tablet">Welcome to AllChat!</h1>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyTablet}
//                                     as={Grid.Column}
//                                     id="header-tablet" width={16}>
//                                     <h1 id="together-tablet">Bring People Together</h1>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <img id="landing-page-image-tablet" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive  {...Responsive.onlyTablet} as={Grid.Column} id="text1-tablet" width={16}>
//                                     <h5 id="paragraph-tablet">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                     With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyTablet}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyTablet}
//                                     as={Grid.Column}
//                                     width={8}>
//                                     <Button fluid as={Link} to='/signup' size="massive" id="get-started-tablet">Get Started</Button>
//                                 </Responsive>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>

//                 <Responsive
//                     {...Responsive.onlyComputer}
//                     as={Grid}
//                     id="landing-container-computer">
//                     <Responsive
//                         {...Responsive.onlyComputer}
//                         as={Grid.Column}
//                         width={8}>
//                         <Responsive
//                             {...Responsive.onlyComputer}
//                             as={Grid} container
//                             id="inner-landing-container-computer">
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <h1 id="welcome-computer">Welcome to AllChat!</h1>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyComputer}
//                                     as={Grid.Column}
//                                     id="header-computer" width={16}>
//                                     <h1 id="together-computer">Bring People Together</h1>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyComputer}
//                                     as={Grid.Column}
//                                     id="text1-computer"
//                                     width={16}>
//                                     <h5 id="paragraph-computer">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                     With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                                 </Responsive>
//                             </Responsive>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <Responsive
//                                     {...Responsive.onlyComputer}
//                                     as={Grid.Column}
//                                     width={4}>
//                                     <Button as={Link} to='/signup' size="massive" id="get-started-computer">Get Started</Button>
//                                 </Responsive>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                     <Responsive
//                         {...Responsive.onlyComputer}
//                         as={Grid.Column}
//                         width={8}>
//                         <Responsive
//                             {...Responsive.onlyComputer}
//                             as={Grid}
//                             container>
//                             <Responsive
//                                 {...Responsive.onlyComputer}
//                                 as={Grid.Row}
//                                 centered>
//                                 <img id="landing-page-image-computer" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>

//                 {/* <Responsive
//                 {...Responsive.onlyLargeScreen}
//                 as={Grid}
//                 id="landing-container">
//                 <Responsive
//                     {...Responsive.onlyLargeScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyLargeScreen}
//                         as={Grid} container
//                         id="inner-landing-container">
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <h1 id="welcome">Welcome to AllChat!</h1>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyLargeScreen}
//                                 as={Grid.Column}
//                                 id="header" width={16}>
//                                 <h1 id="together">Bring People Together</h1>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyLargeScreen} 
//                                 as={Grid.Column} 
//                                 id="text1" 
//                                 width={16}>
//                                 <h5 id="paragraph">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                 With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyLargeScreen}
//                                 as={Grid.Column}
//                                 width={4}>
//                                 <Button as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//                 <Responsive
//                     {...Responsive.onlyLargeScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyLargeScreen}
//                         as={Grid}
//                         container>
//                         <Responsive
//                             {...Responsive.onlyLargeScreen}
//                             as={Grid.Row}
//                             centered>
//                             <img id="landing-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//             </Responsive> */}

//                 {/* <Responsive
//                 {...Responsive.onlyWideScreen}
//                 as={Grid}
//                 id="landing-container">
//                 <Responsive
//                     {...Responsive.onlyWideScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyWideScreen}
//                         as={Grid} container
//                         id="inner-landing-container">
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <h1 id="welcome">Welcome to AllChat!</h1>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyWideScreen}
//                                 as={Grid.Column}
//                                 id="header" width={16}>
//                                 <h1 id="together">Bring People Together</h1>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyWideScreen} 
//                                 as={Grid.Column} 
//                                 id="text1" 
//                                 width={16}>
//                                 <h5 id="paragraph">As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.
//                                 With AllChat, you can talk to anyone across the world, even if you don't speak their language!
//                                 </h5>
//                             </Responsive>
//                         </Responsive>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <Responsive
//                                 {...Responsive.onlyWideScreen}
//                                 as={Grid.Column}
//                                 width={4}>
//                                 <Button as={Link} to='/signup' size="massive" id="get-started">Get Started</Button>
//                             </Responsive>
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//                 <Responsive
//                     {...Responsive.onlyWideScreen}
//                     as={Grid.Column}
//                     width={8}>
//                     <Responsive
//                         {...Responsive.onlyWideScreen}
//                         as={Grid}
//                         container>
//                         <Responsive
//                             {...Responsive.onlyWideScreen}
//                             as={Grid.Row}
//                             centered>
//                             <img id="landing-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//                         </Responsive>
//                     </Responsive>
//                 </Responsive>
//             </Responsive> */}
//             </>
//         )

//     }
// }

// export default LandingPage;