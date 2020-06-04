import React from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import "./style.css";

export default (props) => {
  
  const page = window.location.pathname;

  if(page === "/") {
    console.log(page, "Mount");
    return (
        <Menu secondary widths={12} id="navbar">
          <Menu.Item id="allchat-icon" position="left">
            <AllChatTitle />
          </Menu.Item>
          {props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="room-select" /> : <Menu.Item position="right" content="Already a user?" />}
          {props.isLoggedIn
            ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
            : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
        </Menu>
      );
  } else if(page === "/signup" || page === "/signin" || page === "/signout") {
    console.log(page, "Mount 2");
    return (
        <Menu secondary widths={12} id="navbar">
          <Menu.Item id="allchat-icon" position="left">
            <AllChatTitle />
          </Menu.Item>
        </Menu>
      );
  } else if(page === "/rooms" || page === "/chat") {
    console.log(page, "Mount 3")
    return (
      <Menu secondary widths={12} id="navbar">
        <Menu.Item id="allchat-icon" position="left">
          <AllChatTitle />
        </Menu.Item>
        {props.isLoggedIn
          ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
          : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
      </Menu>
    );
  }
}

// { props.isLoggedIn ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }

// (
//   <Menu secondary widths={12} id="navbar">
//     <Menu.Item id="allchat-icon" position="left">
//       <AllChatTitle />
//     </Menu.Item>
//     {props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="room-select" /> : <Menu.Item position="right" content="Already a user?" />}
//     {props.isLoggedIn
//       ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
//       : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
//   </Menu>
// );