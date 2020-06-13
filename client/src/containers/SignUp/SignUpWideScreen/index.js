import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Grid, Form, Segment, Button, Header } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER, AUTH_USER_ERROR } from '../../../actions/types';
import "./style.css";

class SignUpLargeScreen extends Component {

    onSubmit = async (formValues, dispatch) => {
        try {
            console.log(formValues);
            const { data } = await axios.post('/api/auth/signup', formValues);
            localStorage.setItem('token', data.token);
            console.log(data.user, "signup");
            dispatch({ type: AUTH_USER, payload: data });
            this.props.history.push('/');
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
            <Grid id="signup-container-widescreen">
                <Grid.Column width={8}>
                    <img id="signout-page-image-widescreen" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Form id="signup-form-container-widescreen" size='large' onSubmit={handleSubmit(this.onSubmit)}>
                        <Segment id="signup-form" stacked>
                            <Header id="signup-header-widescreen" as="h1">Sign Up and Start Chatting!</Header>
                            <Header id="signup-form-directions-widescreen" as="h4">Please fill out the following information:</Header>
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
                                        <option value="ar" flag="cn">Arabic</option>
                                        <option value="hy" flag="cn">Armanian</option>
                                        <option value="bn" flag="cn">Bengali</option>
                                        <option value="bg" flag="cn">Bulgarian</option>
                                        <option value="zh" flag="zh">Chinese</option>
                                        <option value="hr" flag="cn">Croatian</option>
                                        <option value="cs" flag="cn">Czech</option>
                                        <option value="da" flag="cn">Danish</option>
                                        <option value="nl" flag="cn">Dutch</option>
                                        <option value="fr" flag="fr">French</option>
                                        <option value="de" flag="de">German</option>
                                        <option value="el" flag="cn">Greek</option>
                                        <option value="gu" flag="cn">Gujrati</option>
                                        <option value="haw" flag="cn">Hawaiian</option>
                                        <option value="hi" flag="in">Hindi</option>
                                        <option value="id" flag="cn">Indonesian</option>
                                        <option value="ja" flag="jp">Japanese</option>
                                        <option value="ko" flag="kr">Korean</option>
                                        <option value="la" flag="kr">Latin</option>
                                        <option value="fa" flag="kr">Persian</option>
                                        <option value="pt" flag="pt">Portuguese</option>
                                        <option value="ru" flag="ru">Russian</option>
                                        <option value="es" flag="es">Spanish</option>
                                        <option value="ta" flag="es">Tamil</option>
                                        <option value="te" flag="es">Telugu</option>
                                        <option value="tr" flag="es">Turkish</option>
                                        <option value="vi" flag="es">Vietnamese</option>
                                        <option value="zu" flag="es">Zulu</option>
                                    </Field>
                                </div>
                            </div>
                            <br />
                            <Button
                                id="signup-btn-widescreen"
                                fluid
                                size='large'
                                type='submit'
                                disabled={invalid || submitting || submitFailed}
                            >
                                <div id="signup-btn-text-widescreen">Sign Up</div>
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

export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: ['email'] })(SignUpLargeScreen);
