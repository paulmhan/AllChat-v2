import React, { Component } from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon, DropdownMenu } from 'semantic-ui-react';
import { signOut } from '../../actions/auth';
import { connect } from 'react-redux';
import { compose } from "redux";
import "./style.css";

const Navbar = props => (
  <Menu secondary widths={12} id="navbar">
    <Menu.Item position="left">
      <AllChatTitle />
    </Menu.Item>
    {!props.isLoggedIn && <Menu.Item as={Link} to='/signup' id="signup"><Icon name="signup" />Sign Up</Menu.Item>}
    {props.isLoggedIn && props.history.location.pathname !== "/rooms" && <Menu.Item as={Link} to="/rooms" content="Chatrooms" id="chatrooms" />}
    {props.isLoggedIn ?
      <Dropdown item text={`Logged in: ${props.user}`}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/' onClick={props.signOut}>
            <Icon name="sign-out" />Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      : <Menu.Item as={Link} to='/signin' id="signin"><Icon name="sign-in" />Sign In</Menu.Item>}
  </Menu>
);

export default compose(
  withRouter,
  connect(null, { signOut })
)(Navbar);