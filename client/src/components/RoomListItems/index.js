import React from 'react';
import { Header, List, Button } from 'semantic-ui-react';


export default (props) => {
  if (props.rooms.length === 0) {
    return <Header content='No Rooms, Create One and Get Started!'/>
  } else {
    return props.rooms[0].map(({_id, text}) => {
      return (
        <List.Item key={_id}>
          <List.Content floated='left'>
            <p>{text}</p>
          </List.Content>
          <List.Content floated='right'>
            <Button
              color='blue'
              content='Join Room'
              size='small'
              onClick={ () => props.handleUpdate(_id, text )}/>
    
          </List.Content>
        </List.Item>
      );
    });
  }
};