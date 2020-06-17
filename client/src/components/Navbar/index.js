import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Responsive, Menu, Icon, Dropdown, Image } from 'semantic-ui-react';
import AllChatLogo from "../../assets/images/AllChat-Logo.png";
import content from "../../content.js";
import { signOut } from '../../actions/auth';
import { connect } from 'react-redux';
import { compose } from "redux";
import "./style.css";


class Navbar extends Component {


  renderRooms(language) {
    switch (language) {
      case "es":
        return content.rooms.es;
      case "zh":
        return content.rooms.zh;
      case "ar":
        return content.rooms.ar;
      case "fr":
        return content.rooms.fr;
      case "de":
        return content.rooms.de;
      case "hi":
        return content.rooms.hi;
      case "it":
        return content.rooms.it;
      case "ja":
        return content.rooms.ja;
      case "ko":
        return content.rooms.ko;
      case "ru":
        return content.rooms.ru;
      case "tl":
        return content.rooms.tl;
      case "te":
        return content.rooms.te;
      case "vi":
        return content.rooms.vi;
      default:
        return content.rooms.en;
    }
  }

  renderSignOut(language) {
    switch (language) {
      case "es":
        return content.signout.es;
      case "zh":
        return content.signout.zh;
      case "ar":
        return content.signout.ar;
      case "fr":
        return content.signout.fr;
      case "de":
        return content.signout.de;
      case "hi":
        return content.signout.hi;
      case "it":
        return content.signout.it;
      case "ja":
        return content.signout.ja;
      case "ko":
        return content.signout.ko;
      case "ru":
        return content.signout.ru;
      case "tl":
        return content.signout.tl;
      case "te":
        return content.signout.te;
      case "vi":
        return content.signout.vi;
      default:
        return content.signout.en;
    }
  }

  renderLoggedIn(language) {
    switch (language) {
      case "es":
        return content.logged.es;
      case "zh":
        return content.logged.zh;
      case "ar":
        return content.logged.ar;
      case "fr":
        return content.logged.fr;
      case "de":
        return content.logged.de;
      case "hi":
        return content.logged.hi;
      case "it":
        return content.logged.it;
      case "ja":
        return content.logged.ja;
      case "ko":
        return content.logged.ko;
      case "ru":
        return content.logged.ru;
      case "tl":
        return content.logged.tl;
      case "te":
        return content.logged.te;
      case "vi":
        return content.logged.vi;
      default:
        return content.logged.en;
    }
  }


  render() {
    return (
      <>
        <Responsive {...Responsive.onlyComputer} minWidth={1051} as={Menu} fixed="top" secondary widths={12} id="navbar">
          <Menu.Item position="left">
            <div id="allchat-icon-container">
              <Image id="allchat-logo" as={Link} to="/" name="home" fluid src={AllChatLogo} />
            </div>
          </Menu.Item>
          {!this.props.isLoggedIn && <Menu.Item as={Link} to='/signup' id="signup-computer"><Icon name="signup" />Sign Up</Menu.Item>}
          {this.props.isLoggedIn && this.props.history.location.pathname !== "/rooms" && <Menu.Item as={Link} to="/rooms" content={this.renderRooms(this.props.user?.language)} id="chatrooms-computer" />}
          {this.props.isLoggedIn ?
            <Dropdown id="user-dropdown-computer" item text={`${this.props.user?.firstName} ${this.props.user?.lastName}`}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/' onClick={this.props.signOut}>
                  <Icon name="sign-out" />
                  {this.renderSignOut(this.props.user?.language)}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            : <Menu.Item as={Link} to='/signin' id="signin-computer"><Icon name="sign-in" />Sign In</Menu.Item>}
        </Responsive>

        <Responsive maxWidth={1050} as={Menu} fixed="top" secondary widths={12} id="navbar">
          <Menu.Item position="left">
            <div id="allchat-icon-container">
              <Image id="allchat-logo" as={Link} to="/" name="home" fluid src={AllChatLogo} />
            </div>
          </Menu.Item>
          <Dropdown id="user-dropdown-small" item>
            <Dropdown.Menu>
              {!this.props.isLoggedIn && <Dropdown.Item as={Link} to='/signup' id="signup-small"><Icon name="signup" />Sign Up</Dropdown.Item>}
              {this.props.isLoggedIn && this.props.history.location.pathname !== "/rooms" && <Dropdown.Item as={Link} to="/rooms" content={this.renderRooms(this.props.user?.language)} id="chatrooms-small" />}
              {this.props.isLoggedIn ?
                <Dropdown.Item as={Link} to='/' onClick={this.props.signOut}>
                  <Icon name="sign-out" />
                  {this.renderSignOut(this.props.user?.language)}
                </Dropdown.Item>
                : <Dropdown.Item as={Link} to='/signin' id="signin-small"><Icon name="sign-in" />Sign In</Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </>
    );

  }
}

export default compose(
  withRouter,
  connect(null, { signOut })
)(Navbar);