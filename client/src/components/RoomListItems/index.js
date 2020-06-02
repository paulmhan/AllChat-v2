import React from 'react';
import { Link } from "react-router-dom";
import { Header, List, Button } from 'semantic-ui-react';
import "./style.css";
import { PromiseProvider } from 'mongoose';

export default (props) => {
  if (props.rooms.length === 0) {
    return <Header content='No Rooms, Create One and Get Started!' />
  } else {
    return props.rooms.map(({ text }, index) => {
      return (
        <List.Item key={index}>
          <List.Content floated='left'>
            <p>{text}</p>
          </List.Content>
          <List.Content floated='right'>
            {/* <Button
              color='blue'
              content='Join Room'
              size='small'
              onClick={ () => props.handleUpdate(_id, text )}/> */}
            <Link to={`/chat?room=${text}`}>
              <button className="button" type="submit" onClick={()=>props.joinRoom(text)}>Join Room</button>
            </Link>
          </List.Content>
        </List.Item>
      );
    });
  }
};