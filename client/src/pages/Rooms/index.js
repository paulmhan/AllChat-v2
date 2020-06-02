import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ChatRoomSelect from "../../components/ChatRoomSelect";
import CreateRoomModal from '../../components/CreateRoomModal';
import requireAuth from "../../hoc/requireAuth";
import { connect } from 'react-redux';
import { compose } from "redux";
import { subscribeToRoomFromServer, createRoom, getAllRooms, joinRoom, deleteRoom } from "../../actions/sockets";
import { loadUser } from "../../actions/auth";
import RoomListItems from "../../components/RoomListItems";



import "./style.css";

class Rooms extends Component {
    
    componentDidMount(){
        this.props.subscribeToRoomFromServer();
        this.props.user || this.props.loadUser();
        !this.props.rooms.length && this.props.getAllRooms();
    }


    render() {
        return(
            <Grid container id="roomselect-container">
                <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12} >
                        <CreateRoomModal 
                            createRoom={this.props.createRoom}
                            userId = {this.props.user?._id}
                        />
                        {/* <ChatRoomSelect 
                            
                        /> */}
                        <RoomListItems
                            rooms={this.props.rooms}
                            joinRoom={this.props.joinRoom}
<<<<<<< HEAD
                            user={this.props.user}
=======
                            deleteRoom ={this.props.deleteRoom}
>>>>>>> 96c28d547726993f28051099781e45e83913afa2
                        />
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
    connect(mapStateToProps, { loadUser, subscribeToRoomFromServer, createRoom, getAllRooms, joinRoom, deleteRoom }),
    requireAuth
)(Rooms)