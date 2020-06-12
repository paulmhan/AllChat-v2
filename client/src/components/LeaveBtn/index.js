import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import "./style.css";

const LeaveBtn = props => {

    return (
        <div>
            <Link to={"/rooms"}>
                <Button fluid id="LeaveBtn"><Icon id="leave-icon" name="arrow left" />Leave</Button>
            </Link>
        </div>
    )
}

export default withRouter(LeaveBtn);