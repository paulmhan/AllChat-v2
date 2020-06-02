import React from 'react';
import { Link } from "react-router-dom";
import { Header, List, Button } from 'semantic-ui-react';
import DeleteRoomModal from "../../components/DeleteRoomModal";
import { PromiseProvider } from 'mongoose';

export default (props) => {
  if (props.rooms.length === 0) {
    return <Header content='No Rooms, Create One and Get Started!' />
  } else {
    return props.rooms.map(({ text, _id }, index) => {
      return (
        <List.Item key={index}>
          <List.Content floated='left'>
            <p>{text}</p>
          </List.Content>
          <List.Content floated='right'>
            <Link to={`/chat?room=${text}`}>
              <Button
                color='blue'
                content='Join Room'
                size='small'
                onClick={() => props.joinRoom(text)} />
            </Link>
            <DeleteRoomModal deleteRoom={props.deleteRoom} id={_id} text={text} />
          </List.Content>
        </List.Item>
      );
    });
  }
};