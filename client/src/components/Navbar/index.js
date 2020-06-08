import React from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { signOut } from '../../actions/auth';
import { connect } from 'react-redux';

import "./style.css";
export default (props) => (
  <Menu secondary id="navbar">
    <Menu.Item position="left">
      <AllChatTitle />
    </Menu.Item>
    {props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" content="Chatrooms" id="chatrooms" /> : <Menu.Item position="right" id="already-user" content="Already a user?"></Menu.Item>}
    {props.isLoggedIn ? <Menu.Item as={Link} to='/signout' content='Sign Out' /> : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
  </Menu>
);

export default connect(null, { signOut })(Navbar);


