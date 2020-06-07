import React from "react";
import { Button } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import "./style.css";

const LeaveBtn = props => {

    return (
        <div>
            <Link to={"/rooms"}>
                <Button id="LeaveBtn">Leave</Button>
            </Link>
        </div>
    )
}

export default withRouter(LeaveBtn);