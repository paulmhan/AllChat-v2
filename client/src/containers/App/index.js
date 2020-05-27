import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";

import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';


import { connect } from 'react-redux';
import Navbar from './../../components/Navbar';

class App extends Component {
  render () {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          <Navbar isLoggedIn={this.props.authenticated}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/' component={LandingPage}/>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
