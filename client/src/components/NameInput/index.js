import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import "./style.css";

class NameInput extends Component {
  
  componentDidUpdate(prevProps) {
    return prevProps.name !== this.props.name;
  }
    render(){
        return (
        <Form id="form-container">
        <Form.Field
          id="name-input"
          error={ this.props.error } 
          required
          label='Name'
          placeholder='Enter your name'
          control='input'
          onChange={this.props.getName}
          onKeyDown = {this.props.handleEnter}
          />
      </Form>
      )  
    }
}
    
export default NameInput;


