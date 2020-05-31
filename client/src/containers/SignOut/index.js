import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Container, Message, Button } from 'semantic-ui-react';

import { signOut } from '../../actions/auth';

class SignOut extends Component {

  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={4} centered>
            <Message negative header="We're sorry to see you go :("/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={8} centered>
            <Button as={Link} to='/' size='huge' content='Go back to homepage'/>
          </Grid.Column>
        </Grid.Row> 
      </Grid>
    );
  }
}

export default connect(null, { signOut })(SignOut);
