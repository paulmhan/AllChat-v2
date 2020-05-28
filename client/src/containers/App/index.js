import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";
import Rooms from "../../pages/Rooms";
import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';


import { connect } from 'react-redux';
import Navbar from './../../components/Navbar';
import ChatRoomSelect from '../../components/ChatRoomSelect';




class App extends Component {

  render () {
    return (
      // <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      //   <Grid.Column style={{ maxWidth: 700 }}>
      <div>
          <Navbar isLoggedIn={this.props.authenticated}/>
          {/* <Route exact path='/signin'  render={() => <SignIn socket={socket} />}/>
          <Route exact path='/signup'  render={() => <SignUp socket={socket} />}/>
          <Route exact path='/signout'  render={() => <SignOut socket={socket} />}/> */}
          {/* <Route exact path='/chat'  render={() => <Chat />}/> */}
          {/* <Route exact path='/'  render={() => <LandingPage socket={socket} />}/> */}
          
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/' component={LandingPage}/>
          {/* <Route exact path='/rooms' component={ChatRoomSelect} /> */}
        {/* </Grid.Column>
      </Grid> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
