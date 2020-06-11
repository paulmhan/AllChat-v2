import React, { Component } from "react";
import { Form, Grid } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { email, required } from "redux-form-validators";
import "./style.css";

class ContactForm extends Component {

  renderName = ({input, meta, placeholder }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        fluid
        autoComplete='off'
        placeholder={placeholder}
      />
    );
  }

  renderEmail = ({ input, meta }) => {
      return (
        <Form.Input
          {...input}
          error={meta.touched && meta.error}
          fluid
          icon="user"
          iconPosition="left"
          autoComplete="off"
          placeholder="Email Address"
        />
      );
    }
  
  render() {
    return (
      <>
        <Grid id="contact-container">
          <Form>
            <Field
              name='email'
              component={this.renderEmail}
              validate={
                [
                  required({ msg: 'Email is required' }),
                  email({ msg: 'You must provide a valid email address' })
                ]
              }
            />
          </Form>
        </Grid>

        <form id="contact-form" onSubmit={this.props.submit} method="POST">
          <div className="form-group mx-5 mt-2">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" onChange={this.props.handleInputChange} value={this.props.username} />
          </div>
          <div className="form-group mx-5">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={this.props.handleInputChange} value={this.props.useremail} />
          </div>
          <div className="form-group mx-5">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" name="text" onChange={this.props.handleInputChange} value={this.props.message}></textarea>
          </div>
          <button type="submit" className="btn btn-primary mx-5 mb-3">Submit</button>
          <p className="ml-5">{this.props.success}</p>
        </form>
      </>
    );
  }

}

export default reduxForm({ form: "contact" }) (ContactForm);