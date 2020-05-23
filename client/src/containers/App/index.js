import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Counter from '../Counter';
import AllTodosList from '../AllTodosList';
import UserTodoList from '../UserTodoList';

import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';
import Room from "../../pages/Room";
import io from "socket.io-client";
import AllChatTitle from "../../components/AllChatTitle";
import LandingPage from "../../pages/LandingPage";


import { connect } from 'react-redux';
// import Navbar from './../../components/Navbar';

class App extends Component {

  // state = {
  //   socket: io()
  // }

  render () {
    return (
      <div>
        <div className="container">
          <AllChatTitle />
        </div>
        <br />
        <Route exact path="/" component={LandingPage} />
        <Route path="/room" component={Room} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);

// render={() => <Room socket={this.state.socket} />}
// render={() => <LandingPage socket={this.state.socket} />}


// <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      //   <Grid.Column style={{ maxWidth: 700 }}>
      //     <Navbar isLoggedIn={this.props.authenticated}/>
      //     <Route exact path='/counter' component={Counter}/>
      //     <Route exact path='/usertodos' component={UserTodoList}/>
      //     <Route exact path='/alltodos' component={AllTodosList}/>
      //     <Route exact path='/signin' component={SignIn}/>
      //     <Route exact path='/signout' component={SignOut}/>
      //     <Route exact path='/' component={SignUp}/>
      //     {/* <Route exact path="/rooms" component={ChatRooms}/> */}
      //     <Route exact path="/room" component={Room}/>
      //   </Grid.Column>
      // </Grid>