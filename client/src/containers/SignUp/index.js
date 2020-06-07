import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
// import LanguageSelect from '../../components/LanguageSelect';
import axios from 'axios';

import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';
import "./style.css";

class SignUp extends Component {

    languages = [
      { key: 'english', value: 'English', flag: 'us', text: 'English' },
      { key: 'arabic', value: 'Arabic', flag: 'sa', text: 'Arabic' },
      { key: 'chinese', value: 'Chinese', flag: 'cn', text: 'Chinese (Mandarin)' },
      { key: 'french', value: 'French', flag: 'fr', text: 'French' },
      { key: 'german', value: 'German', flag: 'de', text: 'German' },
      { key: 'hindi', value: 'Hindi', flag: 'in', text: 'Hindi' },
      { key: 'japanese', value: 'Japanese', flag: 'jp', text: 'Japanese' },
      { key: 'korean', value: 'Korean', flag: 'kr', text: 'Korean' },
      { key: 'portuguese', value: 'Portuguese', flag: 'pt', text: 'Portuguese' },
      { key: 'russian', value: 'Russian', flag: 'ru', text: 'Russian' },
      { key: 'spanish', value: 'Spanish', flag: 'es', text: 'Spanish' },
      { key: 'turkish', value: 'Turkish', flag: 'tr', text: 'Turkish' },
      { key: 'vietnamese', value: 'Vietnamese', flag: 'vn', text: 'Vietnamese' },
    ]
  

  onSubmit = async (formValues, dispatch) => {
    try {
      // console.log(this.languages);
      // console.log(formValues);
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      // console.log(data.user);
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
              {/* <div>
                <label style={{ fontStyle: "italic" }}>Select Your Language</label>
                <div>
                  <Field name="Language" component="select">
                    {this.languages.map(language => (
                      <option key={language.key} value={language.value}>{language.value}</option>
                    )
                    )}
                  </Field>
                </div>
              </div>
              <br /> */}
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