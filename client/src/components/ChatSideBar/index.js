import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Segment,
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Sidebar
} from "semantic-ui-react";
import "./style.css";

const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        animation={animation}
        direction={direction}
        visible={visible}
    >
        <Grid textAlign="center">
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as="h3">New Content Awaits</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid columns={3} divided>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid>
        </Grid>
    </Sidebar>
)

HorizontalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool
}

const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon="labeled"
        inverted
        VerticalSidebar
        visible={visible}
        width="thin"
    >
        <Menu.Item as="a">
            <Icon name="home" />
            Home
        </Menu.Item>
        <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
        </Menu.Item>
        <Menu.Item as="a">
            <Icon name="camera" />
            Channels
        </Menu.Item>
    </Sidebar>
)

VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool
}

class ChatSideBar extends Component {

    state = {
        userList: [],
        animation: "overlay",
        direction: "left",
        dimmed: false,
        visible: false
    }

    handleAnimationChange = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }));


    handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

    handleDirectionalChange = (direction) => () => this.setState({ direction, visible: false });

    render() {
        const { animation, dimmed, direction, visible } = this.state;
        const vertical = direction === "bottom" || direction === "top";

        return (
            <div>
                <Checkbox
                    checked={dimmed}
                    label="Dim Page"
                    onChange={this.handleDimmedChange}
                    toggle
                />

                <Header as="h5">Direction</Header>
                <Button.Group>
                    <Button
                        active={direction === "left"}
                        onClick={this.handleDirectionalChange("left")}
                    >
                        Left
                    </Button>
                    <Button
                        active={direction === "right"}
                        onClick={this.handleDirectionalChange("right")}
                    >
                        Right
                    </Button>
                    <Button
                        active={direction === "top"}
                        onClick={this.handleDirectionalChange("top")}
                    >
                        Top
                    </Button>
                    <Button
                        active={direction === "bottom"}
                        onClick={this.handleDirectionalChange("bottom")}
                    >
                        Bottom
                    </Button>
                </Button.Group>

                <Header as="h5">All Direction Animations</Header>
                <Button onClick={this.handleAnimationChange("overlay")}>Overlay</Button>
                <Button onClick={this.handleAnimationChange("push")}>Push</Button>
                <Button onClick={this.handleAnimationChange("scale down")}>Scale Down</Button>

                <Header as="h5">Vertical-Only Animations</Header>
                <Button
                    disabled={vertical}
                    onClick={this.handleAnimationChange("uncover")}
                >
                    Uncover
                </Button>
                <Button
                    disabled={vertical}
                    onClick={this.handleAnimationChange("slide along")}
                >
                    Slide Along
                </Button>
                <Button
                    disabled={vertical}
                    onClick={this.handleAnimationChange("slide out")}
                >
                    Slide Out
                </Button>

                <Sidebar.Pushable as={Segment}>
                    {vertical ? (
                        <HorizontalSidebar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                        />
                    ) : null}
                    {vertical ? null : (
                        <VerticalSidebar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                        />
                    )}

                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        <Segment basic>
                            <Header as="h3">Application Content</Header>
                            <Image src="/images/wireframe/paragraph.png" />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <h1 id="user-title">Users:</h1>
                <Segment.Group id="chatroom-interface">
                    <div id="user-list">
                        {/* {this.users.map((data, index) =>
                             <Segment.Group key={index}>
                                 <Segment>{data.users}</Segment>
                             </Segment.Group>)} */}
                    </div>
                </Segment.Group>
            </div>
        )

    }
}

export default ChatSideBar;

// userList: []

// getRoomUsers = () => {
    //     const data = {
    //         users: this.state.userList,
    //         userId: this.props.userId
    //     }
    //     this.props.getRoomUsers(data);
    // }

    // <div>
            //     <h1 id="user-title">Users:</h1>
            //     <Segment.Group id="chatroom-interface">
            //         <div id="user-list">
            //             {/* {this.users.map((data, index) =>
            //                 <Segment.Group key={index}>
            //                     <Segment>{data.users}</Segment>
            //                 </Segment.Group>)} */}
            //         </div>
            //     </Segment.Group>

            // </div>