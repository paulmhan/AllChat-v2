import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Message, Button } from 'semantic-ui-react';

import { signOut } from '../../actions/auth';
import "./style.css";

class SignOut extends Component {

  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <Grid id="signout-container">
        <Grid.Column width={8}>
          <img id="signout-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid id="right-inner-container" container>
            <Grid.Row centered>
              <Grid.Column  width={8} >
                <Message negative header="We're sorry to see you go :(" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row id="button-row" centered>
              <Grid.Column width={6} >
                <Button id="HomeBtn" fluid as={Link} to='/' size='huge' content='Go back to homepage' />
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Grid.Column>

      </Grid>
    );
  }
}

export default connect(null, { signOut })(SignOut);
