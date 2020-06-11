import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Header, List, Button, Segment } from 'semantic-ui-react';
import DeleteRoomModal from "../../containers/DeleteRoomModal";

import "./style.css";

export default (props) => {
  if (props.rooms.length === 0) {
    return (
      <Segment>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={7}>
              <Header id="no-roooms-header" content='No Rooms, Create One and Get Started!' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  } else {
    return props.rooms?.map((room, index) => (
      room &&
    <List.Item key={index}>
      <Segment id="room-segment">
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
        </Segment>
      </List.Item>
    ));
  }
};