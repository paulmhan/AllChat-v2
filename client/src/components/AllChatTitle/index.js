import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const AllChatTitle = props => {
    return (
        <div id="allchat-icon">
            <Link to="/" name="home">
                <h1 id="main-header">AllChat</h1>
            </Link>
        </div>

    )
}

export default AllChatTitle;