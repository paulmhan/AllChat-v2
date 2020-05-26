import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SignInModal from "../SignInModal";
import AllChatTitle from "../AllChatTitle";
import "./style.css";

export default (props) => (
  <Menu widths={4} id="navbar">
    <AllChatTitle />
    { props.isLoggedIn ? <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item><SignInModal /></Menu.Item>}
  </Menu>
);



// { props.isLoggedIn ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }