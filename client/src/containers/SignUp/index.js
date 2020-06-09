import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
// import LanguageSelect from '../../components/LanguageSelect';
import axios from 'axios';
import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';
import "./style.css";

class SignUp extends Component {

  onSubmit = async (formValues, dispatch) => {
    try {
      console.log(formValues);
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      console.log(data.user, "signup");
      dispatch({ type: AUTH_USER, payload: data });
      this.props.history.push('/rooms');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }

  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        fluid
        icon='user'
        iconPosition='left'
        autoComplete='off'
        placeholder='Email Address'
      />
    );
  }

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

  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        fluid
        type='password'
        icon='lock'
        placeholder='password'
        autoComplete='off'
        iconPosition='left'
      />
    );
  }

  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Grid id="signup-container">
        <Grid.Column width={8}>
          <img id="signout-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Form id="signup-form-container" size='large' onSubmit={handleSubmit(this.onSubmit)}>
            <Segment id="signup-form" stacked>
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
                name='password'
                component={this.renderPassword}
                validate={
                  [
                    required({ msg: 'You must provide a password' }),
                    length({ min: 6, msg: 'Your password must be at least 6 characters long' })
                  ]
                }
              />
              {/* <LanguageSelect/> */}
              <div>
                <label style={{ fontStyle: "italic" }}>Select Your Language</label>
                <div>
                  <Field name="language" component="select">
                    <option value="en" flag="en">English</option>
                    <option value="cn" flag="cn">Chinese</option>
                    <option value="fr" flag="fr">French</option>
                    <option value="de" flag="de">German</option>
                    <option value="in" flag="in">Hindi</option>
                    <option value="jp" flag="jp">Japanese</option>
                    <option value="kr" flag="kr">Korean</option>
                    <option value="pt" flag="pt">Portuguese</option>
                    <option value="ru" flag="ru">Russian</option>
                    <option value="es" flag="es">Spanish</option>
                  </Field>
                </div>
              </div>
              <br />
              <Button
                id="signup-btn"
                fluid
                size='large'
                type='submit'
                disabled={invalid || submitting || submitFailed}
              >
                <div id="signup-btn-text">Sign Up</div>
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const asyncValidate = async formValues => {
  try {
    const { data } = await axios.get(`/api/user/emails?email=${formValues.email}`);
    if (data) {
      throw new Error();
    }
  } catch (e) {
    throw { email: 'Email already exists, please sign up with a different email' };
  }
}

export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: ['email'] })(SignUp);