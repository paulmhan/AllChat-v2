import React, { Component } from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import { signOut } from '../../actions/auth';
import { connect } from 'react-redux';
import ProfilePic from "../../assets/images/Tim_Allen_headshot.jpg";
import "./style.css";

const Navbar = props => (
  <Menu secondary widths={12} id="navbar">
    <Menu.Item position="left">
      <AllChatTitle />
    </Menu.Item>
    { props.isLoggedIn ? null : <Menu.Item as={Link} to='/signup'  content='Sign Up' id="signup" /> }
    { props.isLoggedIn ? <Menu.Item as={Link} to="/rooms"  content="Chatrooms" id="chatrooms" /> : null }
    <Image item avatar src={ProfilePic}/>
    { props.isLoggedIn ? 
      <Dropdown item>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/profile" icon content="Edit Profile" id="profile" />
          <Dropdown.Item as={Link} to='/' onClick={props.signOut} content='Sign Out'/> 
        </Dropdown.Menu>
      </Dropdown>
      : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
  </Menu>
);

export default connect(null, { signOut })(Navbar);




// class Navbar extends Component {

//   state = {
//     currentPage: window.location.pathname
//   }

//   handlePageChange = () => {
//     const page = this.state.currentPage;
//     if (page === "/") {
//       this.setState({ currentPage: "/" });
//     } else if (page === "/signup") {
//       this.setState({ currentPage: "/signup" })
//     } else if (page === "/signin") {
//       this.setState({ currentPage: "/signin" })
//     } else if (page === "/rooms") {
//       this.setState({ currentPage: "/rooms" })
//     } else if (page === "/chat") {
//       this.setState({ currentPage: "/chat" })
//     }
//   }

//   refreshPage = () => {
//     window.location.reload(false);
//   }

//   conditionalNavbar = () => {
//     if (this.state.currentPage === "/") {
//       return (
//         <>
//           <Menu.Item position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn ? null : <Menu.Item as={Link} to='/signup' content='Sign Up' id="signup" />}
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" content="Chatrooms" id="chatrooms" /> : null}
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to='/' onClick={this.props.signOut} content='Sign Out' /> : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
//         </>
//       );
//     } else if(this.state.currentPage === "/signup") {
//       return (
//         <>
//           <Menu.Item position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" content="Chatrooms" id="chatrooms" /> : null}
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to='/' onClick={this.props.signOut} content='Sign Out' /> : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
//         </>
//       );
//     } else if(this.state.currentPage === "/signin") {
//       return (
//         <>
//           <Menu.Item position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn ? null : <Menu.Item as={Link} to='/signup' content='Sign Up' id="signup" />}
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" content="Chatrooms" id="chatrooms" /> : null}
//         </>
//       );
//     } else if(this.state.currentPage === "/rooms") {
//       return (
//         <>
//           <Menu.Item position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn ? null : <Menu.Item as={Link} to='/signup' content='Sign Up' id="signup" />}
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to='/' onClick={this.props.signOut} content='Sign Out' /> : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
//         </>
//       );
//     } else if(this.state.currentPage === "/chat") {
//       return (
//         <>
//           <Menu.Item position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn ? null : <Menu.Item as={Link} to='/signup' content='Sign Up' id="signup" />}
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" content="Chatrooms" id="chatrooms" /> : null}
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to='/' onClick={this.props.signOut} content='Sign Out' /> : <Menu.Item as={Link} to='/signin' content='Sign In' id="signin" />}
//         </>
//       );
//     }
//   }

//   render() {
//     return (
//       <Menu secondary widths={12} id="navbar">
//         {this.conditionalNavbar()}
//       </Menu>
//     )
//   }
// }