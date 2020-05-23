import React from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./style.css";

const LeaveBtn = props => {

    return(
        <div>
            <Button id="LeaveBtn" onClick={() => props.history.push("/")}>Leave</Button>
        </div>
    )
}

export default withRouter(LeaveBtn);