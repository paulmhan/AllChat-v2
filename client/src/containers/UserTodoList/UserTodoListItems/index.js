import React from 'react';
import { Header, List, Button } from 'semantic-ui-react';

import DeleteTodoModal from './../../../components/DeleteTodoModal';

export default (props) => {
  if (props.todos.length === 0) {
    return <Header content='No todos yet, please add a todo'/>
  } else {
    return props.todos.map(({_id, completed, text}) => {
      return (
        <List.Item key={_id}>
          <List.Content floated='left'>
            <p style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px'}} >{text}</p>
          </List.Content>
          <List.Content floated='right'>
            <Button
              color='blue'
              content='Mark Complete'
              size='small'
              onClick={ () => props.handleUpdate(_id, completed, text )}/>
            <DeleteTodoModal text={text}/>
          </List.Content>
        </List.Item>
      );
    });
  }
};