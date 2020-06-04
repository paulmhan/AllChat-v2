import React, { Component } from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import "./style.css";

class Navbar extends Component {

  state = {
    currentPage: ""
  }

  handleCurrentPage = () => {
    const page = window.location.pathname;
    switch (page) {
      case page === "/":
        return this.setState({ currentPage: "/" });
      case page === "/signup":
        return this.setState({ currentPage: "/signup" });
      case page === "/signin":
        return this.setState({ currentPage: "/signin" });
      case page === "/signout":
        return this.setState({ currentPage: "/signout" });
      case page === "/rooms":
        return this.setState({ currentPage: "/rooms" });
      case page === "/chat":
        return this.setState({ currentPage: "/chat" });
      default:
        return this.state;
    }
  }

  render() {
    switch (this.state) {
      case this.state.currentPage === "/":
        return (
          <Menu secondary widths={12} id="navbar">
            <Menu.Item id="allchat-icon" position="left">
              <AllChatTitle />
            </Menu.Item>
            {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="room-select" /> : <Menu.Item position="right" content="Already a user?" />}
            {this.props.isLoggedIn
              ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
              : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
          </Menu>
        );
      case this.state.currentPage === "/signup":
        return (
          <Menu secondary widths={12} id="navbar">
            <Menu.Item id="allchat-icon" position="left">
              <AllChatTitle />
            </Menu.Item>
            {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="room-select" /> : <Menu.Item position="right" content="Already a user?" />}
            {this.props.isLoggedIn
              ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
              : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
          </Menu>
        );
      case this.state.currentPage === "/signin":
        return (
          <Menu secondary widths={12} id="navbar">
            <Menu.Item id="allchat-icon" position="left">
              <AllChatTitle />
            </Menu.Item>
          </Menu>
        );
      case this.state.currentPage === "/signout":
        return (
          <Menu secondary widths={12} id="navbar">
            <Menu.Item id="allchat-icon" position="left">
              <AllChatTitle />
            </Menu.Item>
          </Menu>
        );
      case this.state.currentPage === "/chat":
        return (
          <Menu secondary widths={12} id="navbar">
            <Menu.Item id="allchat-icon" position="left">
              <AllChatTitle />
            </Menu.Item>
            {this.props.isLoggedIn
              ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
              : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
          </Menu>
        );
      case this.state.currentPage === "/rooms":
        return (
          <Menu secondary widths={12} id="navbar">
            <Menu.Item id="allchat-icon" position="left">
              <AllChatTitle />
            </Menu.Item>
            {this.props.isLoggedIn
              ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
              : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
          </Menu>
        );
      default:
        return (
          <Menu secondary widths={12} id="navbar">
            <Menu.Item id="allchat-icon" position="left">
              <AllChatTitle />
            </Menu.Item>
            {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="room-select" /> : <Menu.Item position="right" content="Already a user?" />}
            {this.props.isLoggedIn
              ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
              : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
          </Menu>
        );
    }
  }
}

export default Navbar;





// (props) => {

//   const page = window.location.pathname;

//   
//   }
// }