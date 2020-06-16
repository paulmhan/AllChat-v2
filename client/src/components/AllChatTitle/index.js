import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import AllChatLogo from "../../assets/images/AllChat-Logo.png";

import "./style.css";

const AllChatTitle = props => {
    return (
        <div id="allchat-icon-container">
            {/* <Link to="/" name="home"> */}
                {/* <h1 id="main-header">AllChat</h1> */}
                <Image id="allchat-logo" as={Link} to="/" name="home" fluid src={AllChatLogo} />
            {/* </Link> */}
        </div>

    )
}

export default AllChatTitle;