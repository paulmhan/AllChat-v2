import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination, Button } from 'semantic-ui-react';

import { compose } from 'redux';

import axios from 'axios';

import UserTodoListItems from './UserTodoListItems';


import { getUserTodos, updateTodoCompletedById } from '../../actions/todos';
import { ADD_TODO_ERROR, ADD_TODO } from '../../actions/types';

class UserTodoList extends Component {

  state = {
    activePage: 1,
    start: 0,
    end: 10
  }

  onSubmit = async (formValues, dispatch) => {
    try {
      await axios.post('/api/user/todos', formValues, { headers: { 'authorization': localStorage.getItem('token')}} );
      dispatch({ type: ADD_TODO });
      this.props.getUserTodos();
    } catch (e) {
      dispatch({ type: ADD_TODO_ERROR, payload: e });
    }
  }

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


  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10
    });
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <Header as='h2' color='teal' textAlign='center' content='Welcome to do the todo app'/>
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo}
            />
            <Button
              type='submit'
              fluid
              color='teal'
              content='Add a todo'
            />
          </Segment>
        </Form>
        <List animated divided selection>
          <UserTodoListItems
            todos={this.props.todos.slice(this.state.start, this.state.end)}
            handleUpdate={this.props.updateTodoCompletedById} />
        </List>
        {
          this.props.todos.length <= 9 ?
            null
            : <Pagination
              totalPages={ Math.ceil( this.props.todos.length / 10) }
              onPageChange={ (event, data) =>  this.handlePageChange(event, data) }
              activePage={this.state.activePage}
            />
        }
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
  connect(mapStateToProps, { getUserTodos, updateTodoCompletedById })
)(UserTodoList);