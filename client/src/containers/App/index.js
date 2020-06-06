import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";
import Rooms from "../../pages/Rooms";
import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';


import { connect } from 'react-redux';
import Navbar from './../../components/Navbar';




class App extends Component {

  render () {
    return (
      <div>
          <Navbar isLoggedIn={this.props.authenticated}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/rooms' component={Rooms} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps,  {})(App);
