import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import content from "../../content.js";

import "./style.css";

class LeaveBtn extends Component {

    renderLeave(language) {
        switch (language) {
            case "es":
                return content.leave.es;
            case "zh":
                return content.leave.zh;
            case "ar":
                return content.leave.ar;
            case "fr":
                return content.leave.fr;
            case "de":
                return content.leave.de;
            case "hi":
                return content.leave.hi;
            case "it":
                return content.leave.it;
            case "ja":
                return content.leave.ja;
            case "ko":
                return content.leave.ko;
            case "ru":
                return content.leave.ru;
            case "tl":
                return content.leave.tl;
            case "te":
                return content.leave.te;
            case "vi":
                return content.leave.vi;
            default:
                return content.leave.en;
        };
    }

    render() {
        return (
            <div>
                <Link to={"/rooms"} centered>
                    <Button color='green' id="LeaveBtn"><Icon id="leave-icon" name="arrow left" />{this.renderLeave(this.props.user?.language)}</Button>
                </Link>
            </div>
        )
    }
}

export default withRouter(LeaveBtn);