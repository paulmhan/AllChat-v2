import React, { Component } from "react";
import { Grid, Pagination, Segment } from "semantic-ui-react";
import CreateRoomModal from '../../containers/CreateRoomModal';
import requireAuth from "../../hoc/requireAuth";
import { connect } from 'react-redux';
import { compose } from "redux";
import { subscribeToRoomFromServer, createRoom, getAllRooms, deleteRoom, unsubscribeMessage } from "../../actions/sockets";
import { loadUser } from "../../actions/auth";
import RoomListItems from "../../components/RoomListItems";
import "./style.css";


class Rooms extends Component {

    state = {
        activePage: 1,
        start: 0,
        end: 10
    }

    async componentDidMount() {
        !this.props.rooms.length && this.props.subscribeToRoomFromServer();
        this.props.user || await this.props.loadUser();
        !this.props.rooms.length && await this.props.getAllRooms();
    }

    componentWillUnmount() {
        this.props.unsubscribeMessage();
    }


    handlePageChange = (event, data) => {
        this.setState({
            activePage: data.activePage,
            start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
            end: data.activePage * 10
        });
        
    }

    render() {
        return (
            <Grid container id="roomselect-container">
                <Grid.Row centered>
                    <CreateRoomModal
                        createRoom={this.props.createRoom}
                        user={this.props.user}
                    />
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={12} >
                        <Segment.Group>
                            {this.props.rooms &&
                                <RoomListItems
                                    rooms={this.props.rooms.slice(this.state.start, this.state.end)}
                                    joinRoom={this.props.joinRoom}
                                    user={this.props.user}
                                    deleteRoom={this.props.deleteRoom}
                                />}
                        </Segment.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={7}>
                        {
                            this.props.rooms.length <= 9 ?
                                null
                                : <Pagination
                                    totalPages={Math.ceil(this.props.rooms.length / 10)}
                                    onPageChange={(event, data) => this.handlePageChange(event, data)}
                                    activePage={this.state.activePage}
                                />
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        )
    }
};


function mapStateToProps(state) {
    return {
        user: state.auth.currentUser,
        rooms: state.socket.rooms
    }
}

export default compose(
    connect(mapStateToProps, { loadUser, subscribeToRoomFromServer, createRoom, getAllRooms, deleteRoom, unsubscribeMessage }),
    requireAuth
)(Rooms)