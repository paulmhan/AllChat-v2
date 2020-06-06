import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Header, List, Button, Segment } from 'semantic-ui-react';
import DeleteRoomModal from "../../components/DeleteRoomModal";

import "./style.css";

export default (props) => {
  if (props.rooms.length === 0) {
    return <Header content='No Rooms, Create One and Get Started!' />
  } else {
    return props.rooms?.map((room, index) => (
      room &&
<<<<<<< HEAD
    <List.Item key={index}>
      <Segment id="room-segment">
        
=======
        <List.Item key={index}>
      <Segment id="room-segment">
>>>>>>> 59fcf32ce07ef400b9abb387861a930555a43736
          <Grid>
            <Grid.Column width={12}>
              <List.Content>
                <p id="room-text">{room.text}</p>
              </List.Content>
            </Grid.Column>
            <Grid.Column width={3}>
              <List.Content>
                <Link to={`/chat?room=${room._id}`}>
                  <Button
                    fluid
                    id="JoinRoomBtn"
                    color='blue'
                    content='Join Room'
                    size='small'
                  // onClick={() => props.joinRoom({ user:props.user, room})} 
                  />
                </Link>
              </List.Content>
            </Grid.Column>
            <Grid.Column width={1}>
              <List.Content>
              {room.creator === props.user?._id && <DeleteRoomModal deleteRoom={props.deleteRoom} id={room._id} text={room.text} />}
              </List.Content>
            </Grid.Column>
          </Grid>
<<<<<<< HEAD
        </Segment>
      </List.Item>
      
=======
      </Segment>
        </List.Item>
>>>>>>> 59fcf32ce07ef400b9abb387861a930555a43736

    ));
  }
};