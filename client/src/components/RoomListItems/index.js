import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Header, List, Button, Segment } from 'semantic-ui-react';
import content from "../../content.js";
import DeleteRoomModal from "../../containers/DeleteRoomModal";

import "./style.css";

class RoomListItems extends Component {

  renderNoRooms(language){
    switch(language){
        case "es":
            return content.norooms.es;
        case "zh":
            return content.norooms.zh;
        case "ar":
            return content.norooms.ar;
        case "fr":
            return content.norooms.fr;
        case "de":
            return content.norooms.de;
        case "hi":
            return content.norooms.hi;
        case "ja":
            return content.norooms.ja;
        case "ko":
            return content.norooms.ko;
        case "ru":
            return content.norooms.ru;
        case "tl":
            return content.norooms.tl;
        case "vi":
            return content.norooms.vi;
        default:
            return content.norooms.en;
    }
}


  render(){
      if (this.props.rooms.length === 0) {
        return (
          <Segment>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={7}>
                  <Header id="no-roooms-header" content= {this.renderNoRooms(this.props.user?.language)} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        );
      } else {
        return this.props.rooms?.map((room, index) => (
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
                      />
                    </Link>
                  </List.Content>
                </Grid.Column>
                <Grid.Column width={1}>
                  <List.Content>
                    {room.creator === this.props.user?._id && <DeleteRoomModal deleteRoom={this.props.deleteRoom} id={room._id} text={room.text} />}
                  </List.Content>
                </Grid.Column>
              </Grid>
            </Segment>
          </List.Item>
        ));
      }
    };
  }

  export default RoomListItems;