import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
  GET_USER_TODOS,
  GET_USER_TODOS_ERROR,
} from '../types';

import axios from 'axios';


export const getAllTodos = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/todos');
    dispatch({ type: GET_ALL_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_TODOS_ERROR, payload: 'Something went wrong, please refresh the page to try again'})
  }
};


export const getUserTodos = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token')} });
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_USER_TODOS_ERROR, serverError: e, userError: 'Please refresh the page and try again' });
  }
};





