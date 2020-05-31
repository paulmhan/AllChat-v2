import React from "react";
import { List, Accordion, Button } from "semantic-ui-react";



const ChatRoom1 = (
    <div>
        <List>
            <List.Item>User 1</List.Item>
            <List.Item>User 2</List.Item>
            <List.Item>User 3</List.Item>
        </List>
        <Button content="Join Chat" />
    </div>
);

const ChatRoom2 = (
    <div>
        <List>
            <List.Item>User 1</List.Item>
            <List.Item>User 2</List.Item>
            <List.Item>User 3</List.Item>
        </List>
        <Button content="Join Chat" />
    </div>
);

const ChatRoom3 = (
    <div>
        <List>
            <List.Item>User 1</List.Item>
            <List.Item>User 2</List.Item>
            <List.Item>User 3</List.Item>
        </List>
        <Button content="Join Chat" />
    </div>
);

const ChatRooms = [
    { key: "Chatroom 1", title: "Chatroom 1", content: { content: ChatRoom1 } },
    { key: "Chatroom 2", title: "Chatroom 2", content: { content: ChatRoom2 } },
    { key: "Chatroom 3", title: "Chatroom 3", content: {}}
];


const ChatRoomSelect = () => {
    return(
        <Accordion 
            defaultActiveIndex={[0]}
            panels={ChatRooms}
            exclusive={false}
            fluid
            styled
        />
    )
}

export default ChatRoomSelect;