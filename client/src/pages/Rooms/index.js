import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ChatRoomSelect from "../../components/ChatRoomSelect";
import CreateRoomModal from '../../components/CreateRoomModal';
import requireAuth from "../../hoc/requireAuth";
import { connect } from 'react-redux';
import { compose } from "redux";
import { subscribeToRoomFromServer, createRoom } from "../../actions/sockets";
import { loadUser } from "../../actions/auth";



import "./style.css";

class Rooms extends Component {
    
    componentDidMount(){
        this.props.subscribeToRoomFromServer();
        this.props.loadUser();
    }

    render() {
        return(
            <Grid container id="roomselect-container">
                <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12} >
                        <CreateRoomModal 
                            createRoom={this.props.createRoom}
                        />
                        <ChatRoomSelect />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        )
    }
};


function mapStateToProps(state) {
    return { user: state.auth.currentUser }
}


export default compose(
    connect(mapStateToProps, { loadUser, subscribeToRoomFromServer, createRoom }),
    requireAuth
)(Rooms)