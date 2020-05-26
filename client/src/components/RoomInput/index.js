import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class RoomInput extends Component {
  componentDidUpdate(prevProps) {
    return prevProps.room !== this.props.room;
  }
    render(){
        return (
        <Form >
        <Form.Field 
          error={ this.props.error } 
          required
          label='Room Name'
          placeholder='Enter your Room name'
          control='input'
          onChange={this.props.getRoom}
          />
      </Form>
      )
        
    }
}
    
export default RoomInput;