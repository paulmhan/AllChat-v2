import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { email, required } from "redux-form-validators";
import "./style.css";

class ContactForm extends Component {

  renderNames = ({ input, meta, placeholder }) => {
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

  renderDescription = ({ input, meta }) => {
    return(
      <Form.Input 
      {...input}
      error={meta.touched && meta.error}
      fluid
      icon="write"
      iconPosition="left"
      autoComplete="off"
      placeholder="Please enter your feedback..."
    />
    )
  }

  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <>
          <Form id="contact-form" onSubmit={handleSubmit(this.props.onSubmit)} method="POST">
            <Field
              name='firstName'
              component={this.renderNames}
              placeholder="First Name"
              validate={
                [
                  required({ msg: 'First name is required' })
                ]
              }
            />
            <Field
              name='lastName'
              component={this.renderNames}
              placeholder="Last Name"
              validate={
                [
                  required({ msg: 'Last name is required' })
                ]
              }
            />
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
            <Field 
              name="description"
              component={this.renderDescription}
              validate={
                required({ msg: "You need to enter your feedback" })
              }
            />
            <Button
              id="contact-submit-btn"
              fluid
              size='large'
              type='submit'
              disabled={invalid || submitting || submitFailed}
            >
              Submit
            </Button>
            <p>{this.props.success}</p>
          </Form>
      </>
    );
  }

}

export default reduxForm({ form: "contact" })(ContactForm);
