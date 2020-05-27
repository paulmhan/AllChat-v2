import React from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import "./style.css";



export default (props) => (
  <Menu secondary widths={12} id="navbar">
    <Menu.Item position="left">
      <AllChatTitle />
    </Menu.Item>
    { props.isLoggedIn ? null : <Menu.Item as={Link} to='/signup' position="right" content='Sign Up' id="signup" /> }
    { props.isLoggedIn ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
  </Menu>
);


// { props.isLoggedIn ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }
