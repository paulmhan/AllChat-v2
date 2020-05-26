import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SignInModal from "../SignInModal";
import AllChatTitle from "../AllChatTitle";
import "./style.css";

export default (props) => (
  <Menu widths={2} id="navbar">
    <Menu.Item position="left">
      <AllChatTitle />
    </Menu.Item>
    { props.isLoggedIn ? <Menu.Item as={Link} to='/signout' positon="right" content='Sign Out'/> : <Menu.Item positon="right"><SignInModal /></Menu.Item>}
  </Menu>
);



// { props.isLoggedIn ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }