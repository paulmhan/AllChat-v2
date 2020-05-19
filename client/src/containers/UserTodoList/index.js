import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination } from 'semantic-ui-react';

import { compose } from 'redux';
import axios from 'axios';

import { getUserTodos } from '../../actions/todos';

class UserTodoList extends Component {

  componentDidMount() {
    this.props.getUserTodos();
  }

  renderAddTodo = ({ input, meta }) => {
    return (
      <>
        <Form.Input
          {...input}
          error={ meta.touched && meta.error }
          fluid
          autoComplete='off'
          placeholder='Add a todo'
        />
      </>
    )
  }
  render() {

    return (
      <>
        <Header as='h2' color='teal' textAlign='center' content='Welcome to do the todo app'/>
        <Form size='large'>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo}
            />
          </Segment>
        </Form>
      </>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     todos: state.todos.userTodos,
//     clientError: state.todos.getUserTodosClientError,
//     serverError: state.todos.getUserTodosServerError
//   };
// }


function mapStateToProps({ todos: { userTodos, getUserTodosServerError, getUserTodosClientError}}) {
  return {
    todos: userTodos,
    clientError: getUserTodosClientError,
    serverError: getUserTodosServerError
  };
}

// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);


// 1 way
// export default reduxForm({ form: 'addTodo' })(connect(mapStateToProps, { getUserTodos })(UserTodoList));

// 2nd way
// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);
// export default reduxForm({ form: 'addTodo'})(composedComponent);


export default compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserTodos })
)(UserTodoList);

