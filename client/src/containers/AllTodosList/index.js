import React, { Component } from 'react';
import { List, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getAllTodos } from './../../actions/todos';

import moment from 'moment';

class AllTodosList extends Component {
  componentDidMount() {
    console.log("Inside of componentDidMount");
    this.props.getAllTodos();
  }

  renderList = () => {
    if (this.props.allTodos.length === 0) {
      return <Header content='No todos yet'/>;
    } else {
      return this.props.allTodos.map(({ _id, text, dateCreated}) => {
        return (
          <List.Item key={_id}>
            <List.Content>
              <List.Header>{text}</List.Header>
              <List.Description>{moment(dateCreated).fromNow()}</List.Description>
            </List.Content>
          </List.Item>
        );
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <List celled selection size='huge'>
        { this.props.getAllTodosError ? <Message negative header={this.props.getAllTodosError}/> : null }
        { this.renderList() }
      </List>
    );
  }
}

function mapStateToProps(state) {
  return { allTodos: state.todos.allTodos, getAllTodosError: state.todos.getAllTodosError };
}

export default connect(mapStateToProps, { getAllTodos })(AllTodosList);
