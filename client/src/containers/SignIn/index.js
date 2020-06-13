import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Responsive, Grid, Form, Segment, Button, Header } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER } from '../../actions/types';

import "./style.css";

class SignIn extends Component {

  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signin', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data });
      this.props.history.push('/');
    } catch (e) {
      throw new SubmissionError({
        email: 'Please try again',
        password: 'You entered a bad password',
        _error: 'Login Failed'
      });
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
    const { submitting, handleSubmit } = this.props;
    return (

      <Grid id="signin-container">
        <Grid.Column width={8}>
          <img id="signout-page-image" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Form id="signin-form-container" size='large' onSubmit={handleSubmit(this.onSubmit)}>
            <Segment id="signin-form" stacked>
              <Header id="signin-header" as="h1">Sign In and Continue Chatting!</Header>
              <Header id="signin-form-directions" as="h4">Please provide your credentials:</Header>
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
                    required({ msg: 'You must provide a password' })
                  ]
                }
              />
              <Button
                id="signin-btn"
                fluid
                size='large'
                type='submit'
                disabled={submitting}
              >
                <div id="signin-btn-text">Sign In</div>
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
export default reduxForm({ form: 'signin' })(SignIn);

// <>
      //   <Responsive {...Responsive.onlyMobile} as={Grid} id="signin-container-mobile">
      //     <Responsive {...Responsive.onlyMobile} as={Grid.Column} width={16}>
      //       <Form id="signin-form-container-mobile" size='large' onSubmit={handleSubmit(this.onSubmit)}>
      //         <Segment id="signin-form-mobile" stacked>
      //           <Field
      //             name='email'
      //             iscool='mannyiscool'
      //             component={this.renderEmail}
      //             validate={
      //               [
      //                 required({ msg: 'Email is required' }),
      //                 email({ msg: 'You must provide a valid email address' })
      //               ]
      //             }
      //           />
      //           <Field
      //             name='password'
      //             component={this.renderPassword}
      //             validate={
      //               [
      //                 required({ msg: 'You must provide a password' })
      //               ]
      //             }
      //           />
      //           <Button
      //             id="signin-btn-mobile"
      //             fluid
      //             size='large'
      //             type='submit'
      //             disabled={submitting}
      //           >
      //             <div id="signin-btn-text-mobile">Sign In</div>
      //           </Button>
      //         </Segment>
      //       </Form>
      //     </Responsive>
      //   </Responsive>

      //   <Responsive {...Responsive.onlyTablet} as={Grid} id="signin-container-tablet">
      //     <Responsive {...Responsive.onlyTablet} as={Grid.Column} width={16}>
      //       <Form id="signin-form-container-tablet" size='large' onSubmit={handleSubmit(this.onSubmit)}>
      //         <Segment id="signin-form-tablet" stacked>
      //           <Field
      //             name='email'
      //             iscool='mannyiscool'
      //             component={this.renderEmail}
      //             validate={
      //               [
      //                 required({ msg: 'Email is required' }),
      //                 email({ msg: 'You must provide a valid email address' })
      //               ]
      //             }
      //           />
      //           <Field
      //             name='password'
      //             component={this.renderPassword}
      //             validate={
      //               [
      //                 required({ msg: 'You must provide a password' })
      //               ]
      //             }
      //           />
      //           <Button
      //             id="signin-btn-tablet"
      //             fluid
      //             size='large'
      //             type='submit'
      //             disabled={submitting}
      //           >
      //             <div id="signin-btn-text-tablet">Sign In</div>
      //           </Button>
      //         </Segment>
      //       </Form>
      //     </Responsive>
      //   </Responsive>

      //   <Responsive {...Responsive.onlyComputer} as={Grid} id="signin-container-computer">
      //     <Responsive {...Responsive.onlyComputer} as={Grid.Column} width={8}>
      //       <img id="signin-page-image-computer" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
      //     </Responsive>
      //     <Responsive {...Responsive.onlyComputer} as={Grid.Column} width={8}>
      //       <Form id="signin-form-container-computer" size='large' onSubmit={handleSubmit(this.onSubmit)}>
      //         <Segment id="signin-form" stacked>
      //           <Field
      //             name='email'
      //             iscool='mannyiscool'
      //             component={this.renderEmail}
      //             validate={
      //               [
      //                 required({ msg: 'Email is required' }),
      //                 email({ msg: 'You must provide a valid email address' })
      //               ]
      //             }
      //           />
      //           <Field
      //             name='password'
      //             component={this.renderPassword}
      //             validate={
      //               [
      //                 required({ msg: 'You must provide a password' })
      //               ]
      //             }
      //           />
      //           <Button
      //             id="signin-btn-computer"
      //             fluid
      //             size='large'
      //             type='submit'
      //             disabled={submitting}
      //           >
      //             <div id="signin-btn-text-computer">Sign In</div>
      //           </Button>
      //         </Segment>
      //       </Form>
      //     </Responsive>
      //   </Responsive>
      // </>