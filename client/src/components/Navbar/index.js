import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';



export default (props) => (
  <Menu widths={4}>
    { props.isLoggedIn ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }
    { props.isLoggedIn ? <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
  </Menu>
);
