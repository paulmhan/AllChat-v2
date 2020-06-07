import React from 'react';
import AllChatTitle from "../AllChatTitle";
import { Link } from 'react-router-dom';
import { Menu, Grid } from 'semantic-ui-react';
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


// import React, { Component } from 'react';
// import AllChatTitle from "../AllChatTitle";
// import { Link } from 'react-router-dom';
// import { Menu, Button } from 'semantic-ui-react';
// import "./style.css";

// class Navbar extends Component {

//   state = {
//     currentPage: window.location.pathname
//   }

//   handleCurrentPage = () => {
//     if (this.state.currentPage === "/") {
//       this.setState({ currentPage: "/" });
//     } else if (this.state.currentPage === "/signup") {
//       this.setState({ currentPage: "/signup" });
//     } else if (this.state.currentPage === "/signin") {
//       this.setState({ currentPage: "/signin" });
//     } else if (this.state.currentPage === "/signout") {
//       this.setState({ currentPage: "/signout" });
//     } else if (this.state.currentPage === "/rooms") {
//       this.setState({ currentPage: "/rooms" });
//     } else if (this.state.currentPage === "/chat") {
//       this.setState({ currentPage: "/chat" });
//     }
//   }

//   handleNavbarRender = () => {
//     if (this.state.currentPage === "/") {
//       return (
//         <>
//           <Menu.Item id="allchat-icon" position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="room-select" /> : <Menu.Item position="right" content="Already a user?" />}
//           {
//             this.props.isLoggedIn
//               ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
//               : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>
//           }
//         </>
//       );
//     } else if (this.state.currentPage === "/signup") {
//       return (
//         <>
//           <Menu.Item id="allchat-icon" position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn ? <Menu.Item as={Link} to="/rooms" position="right" content="Chatrooms" id="room-select" /> : <Menu.Item position="right" content="Already a user?" />}
//           {this.props.isLoggedIn
//             ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
//             : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
//         </>
//       );
//     } else if (this.state.currentPage === "/signin") {
//       return (
//         <>
//           <Menu.Item id="allchat-icon" position="left">
//             <AllChatTitle />
//           </Menu.Item>
//         </>
//       );
//     } else if (this.state.currentPage === "/signout") {
//       return (
//         <>
//           <Menu.Item id="allchat-icon" position="left">
//             <AllChatTitle />
//           </Menu.Item>
//         </>
//       );
//     } else if (this.state.currentPage === "/rooms") {
//       return (
//         <>
//           <Menu.Item id="allchat-icon" position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn
//             ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
//             : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
//         </>
//       )
//     } else if (this.state.currentPage === "/chat") {
//       return (
//         <>
//           <Menu.Item id="allchat-icon" position="left">
//             <AllChatTitle />
//           </Menu.Item>
//           {this.props.isLoggedIn
//             ? <Menu.Item as={Link} to='/signout' position="right" content='Sign Out' id="signout" />
//             : <Menu.Item><Button as={Link} to='/signin' id="signin">Sign In</Button></Menu.Item>}
//         </>
//       )
//     }
//   }

//   render() {
//     console.log("Current Page: ", this.state.currentPage);
//     return (
//       <Menu secondary widths={12} id="navbar">
//         { this.handleNavbarRender() }
//       </Menu>
//     );
//   }
// }


// export default Navbar;