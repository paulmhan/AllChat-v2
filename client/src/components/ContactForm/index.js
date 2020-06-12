import React, { Component } from "react";
import { Form, Grid, Button } from "semantic-ui-react";
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
        <Grid id="contact-container">
          <Form id="contact-form" onSubmit={this.props.submit} method="POST">
            <Field
              onChange={this.props.handleInputChange}
              value={this.props.username}
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
              onChange={this.props.handleInputChange}
              value={this.props.username}
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
              onChange={this.props.handleInputChange}
              value={this.props.useremail}
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
              onChange={this.props.handleInputChange} 
              value={this.props.message}
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
        </Grid>

        
      </>
    );
  }

}

export default reduxForm({ form: "contact" })(ContactForm);

// {/* <form >
//           <div className="form-group mx-5 mt-2">
//             <label htmlFor="name">Name</label>
//             <input type="text" className="form-control" name="name" onChange={this.props.handleInputChange} value={this.props.username} />
//           </div>
//           <div className="form-group mx-5">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={this.props.handleInputChange} value={this.props.useremail} />
//           </div>
//           <div className="form-group mx-5">
//             <label htmlFor="message">Message</label>
//             <textarea className="form-control" rows="5" name="text" onChange={this.props.handleInputChange} value={this.props.message}></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary mx-5 mb-3">Submit</button>
//           <p className="ml-5">{this.props.success}</p>
//         </form> */}