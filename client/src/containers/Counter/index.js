import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/counter';


class Counter extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column textAlign='center'>
          <Header
            as='h1'
            textAlign='center'
            content='Welcome to the Counter App'
          />
          <Header as='h2' textAlign='center'>Counter: <span>{this.props.counter}</span></Header>
          <Button.Group>
            <Button
              icon='minus circle'
              content='Decrement'
              negative
              onClick={ this.props.decrement }
            />
            <Button.Or/>
            <Button
              icon='plus circle'
              content='Increment'
              positive
              onClick={ this.props.increment }
            />
          </Button.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

// This takes a key which is what we want the states name to be as props
// The value is what state we want to pull out from the store
function mapStateToProps(state) {
  return { counter: state.counter };
};
// 2nd parameter to connect is what actions we want wired up to this component
// To be sent to all of our reducers

export default  connect(mapStateToProps, { increment, decrement })(Counter);

