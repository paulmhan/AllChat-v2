import React from "react";
import { Link } from "react-router-dom";
import { List, Header, Accordion, Button } from "semantic-ui-react";
import DeleteRoomModal from "../DeleteRoomModal";

const ChatRoom = (props) => {
    if(props.rooms.length === 0) {
        return <Header content="No Rooms, Create One and Get Started" />
    } else {
        console.log(props.rooms);
        return props.rooms?.map((room, index) => (
            room && 
              <List.Item key={index}>
                <List.Content floated='left'>
                  <p>{room.text}</p>
                </List.Content>
                <List.Content floated='right'>
                  <Link to={`/chat?room=${room._id}`}>
                    <Button
                      color='blue'
                      content='Join Room'
                      size='small'
                      // onClick={() => props.joinRoom({ user:props.user, room})} 
                      />
                  </Link>
                  {room.creator === props.user?._id && <DeleteRoomModal deleteRoom={props.deleteRoom} id={room._id} text={room.text} />}
                </List.Content>
              </List.Item>
            
          ));
    }
}

const ChatRoomList = [
    { key: "Chatroom", title: "Chatroom", content: { content: ChatRoom } },
];


const ChatRoomSelect = () => {
    return(
        <Accordion 
            defaultActiveIndex={[0]}
            panels={ChatRoomList}
            exclusive={false}
            fluid
            styled
        />
    )
}

export default ChatRoomSelect;