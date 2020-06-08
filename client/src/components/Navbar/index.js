import React from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { signOut } from '../../actions/auth';
import { connect } from 'react-redux';

import "./style.css";



const Navbar = props => (
  <Menu secondary widths={12} id="navbar">
    <Menu.Item position="left">
      <AllChatTitle />
    </Menu.Item>
    { props.isLoggedIn ? null : <Menu.Item as={Link} to='/signup' position="right" content='Sign Up' id="signup" /> }
    { props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="chatrooms" /> : null }
    { props.isLoggedIn ? <Menu.Item as={Link} to='/' onClick={props.signOut} position="right" content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
  </Menu>
);

export default connect(null, { signOut })(Navbar);


