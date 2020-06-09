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
                    <option value="English" flag="us">English</option>
                    <option value="Chinese" flag="us">Chinese</option>
                    <option value="French" flag="us">French</option>
                    <option value="German" flag="us">German</option>
                    <option value="Hindi" flag="us">Hindi</option>
                    <option value="Japanese" flag="us">Japanese</option>
                    <option value="Korean" flag="us">Korean</option>
                    <option value="Portuguese" flag="us">Portuguese</option>
                    <option value="Russian" flag="us">Russian</option>
                    <option value="Spanish" flag="us">Spanish</option>
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



// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { Grid, Responsive, Form, Segment, Button } from 'semantic-ui-react';
// import { email, length, required } from 'redux-form-validators';
// // import LanguageSelect from '../../components/LanguageSelect';
// import axios from 'axios';
// import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';
// import "./style.css";


// class SignUp extends Component {

//   onSubmit = async (formValues, dispatch) => {
//     try {
//       console.log(formValues);
//       const { data } = await axios.post('/api/auth/signup', formValues);
//       localStorage.setItem('token', data.token);
//       console.log(data.user, "signup");
//       dispatch({ type: AUTH_USER, payload: data });
//       this.props.history.push('/rooms');
//     } catch (e) {
//       dispatch({ type: AUTH_USER_ERROR, payload: e });
//     }
//   }

//   renderEmail = ({ input, meta }) => {
//     return (
//       <Form.Input
//         {...input}
//         error={meta.touched && meta.error}
//         fluid
//         icon='user'
//         iconPosition='left'
//         autoComplete='off'
//         placeholder='Email Address'
//       />
//     );
//   }

//   renderNames = ({ input, meta, placeholder }) => {
//     return (
//       <Form.Input
//         {...input}
//         error={meta.touched && meta.error}
//         fluid
//         autoComplete='off'
//         placeholder={placeholder}
//       />
//     );
//   }

//   renderPassword = ({ input, meta }) => {
//     return (
//       <Form.Input
//         {...input}
//         error={meta.touched && meta.error}
//         fluid
//         type='password'
//         icon='lock'
//         placeholder='password'
//         autoComplete='off'
//         iconPosition='left'
//       />
//     );
//   }

//   render() {
//     const { handleSubmit, invalid, submitting, submitFailed } = this.props;
//     return (
//       <>
//       <Responsive 
//           {...Responsive.onlyMobile} 
//           as={Grid} 
//           id="signup-container-mobile">
//           <Responsive
//           {...Responsive.onlyMobile} 
//           as={Grid.Column} 
//           width={16}>
//             <Form id="signup-form-container-mobile" size='large' onSubmit={handleSubmit(this.onSubmit)}>
//               <Segment id="signup-form-mobile" stacked>
//                 <Field
//                   name='firstName'
//                   component={this.renderNames}
//                   placeholder="First Name"
//                   validate={
//                     [
//                       required({ msg: 'First name is required' })
//                     ]
//                   }
//                 />
//                 <Field
//                   name='lastName'
//                   component={this.renderNames}
//                   placeholder="Last Name"
//                   validate={
//                     [
//                       required({ msg: 'Last name is required' })
//                     ]
//                   }
//                 />

//                 <Field
//                   name='email'
//                   component={this.renderEmail}
//                   validate={
//                     [
//                       required({ msg: 'Email is required' }),
//                       email({ msg: 'You must provide a valid email address' })
//                     ]
//                   }
//                 />
//                 <Field
//                   name='password'
//                   component={this.renderPassword}
//                   validate={
//                     [
//                       required({ msg: 'You must provide a password' }),
//                       length({ min: 6, msg: 'Your password must be at least 6 characters long' })
//                     ]
//                   }
//                 />
//                 <div>
//                   <label style={{ fontStyle: "italic" }}>Select Your Language</label>
//                   <div>
//                     <Field name="Language" component="select">
//                       {this.languages.map(language => (
//                         <option key={language.key} value={language.value}>{language.value}</option>
//                       )
//                       )}
//                     </Field>
//                   </div>
//                 </div>
//                 <br />
//                 <Button
//                   id="signup-btn-mobile"
//                   fluid
//                   size='large'
//                   type='submit'
//                   disabled={invalid || submitting || submitFailed}
//                 >
//                   <div id="signup-btn-text-mobile">Sign Up</div>
//                 </Button>
//               </Segment>
//             </Form>
//           </Responsive>
//         </Responsive>

//         <Responsive 
//           {...Responsive.onlyTablet} 
//           as={Grid} 
//           id="signup-container-tablet">
//           <Responsive
//           {...Responsive.onlyTablet} 
//           as={Grid.Column} 
//           width={16}>
//             <Form id="signup-form-container-tablet" size='large' onSubmit={handleSubmit(this.onSubmit)}>
//               <Segment id="signup-form-tablet" stacked>
//                 <Field
//                   name='firstName'
//                   component={this.renderNames}
//                   placeholder="First Name"
//                   validate={
//                     [
//                       required({ msg: 'First name is required' })
//                     ]
//                   }
//                 />
//                 <Field
//                   name='lastName'
//                   component={this.renderNames}
//                   placeholder="Last Name"
//                   validate={
//                     [
//                       required({ msg: 'Last name is required' })
//                     ]
//                   }
//                 />

//                 <Field
//                   name='email'
//                   component={this.renderEmail}
//                   validate={
//                     [
//                       required({ msg: 'Email is required' }),
//                       email({ msg: 'You must provide a valid email address' })
//                     ]
//                   }
//                 />
//                 <Field
//                   name='password'
//                   component={this.renderPassword}
//                   validate={
//                     [
//                       required({ msg: 'You must provide a password' }),
//                       length({ min: 6, msg: 'Your password must be at least 6 characters long' })
//                     ]
//                   }
//                 />
//                 <div>
//                   <label style={{ fontStyle: "italic" }}>Select Your Language</label>
//                   <div>
//                     <Field name="Language" component="select">
//                       {this.languages.map(language => (
//                         <option key={language.key} value={language.value}>{language.value}</option>
//                       )
//                       )}
//                     </Field>
//                   </div>
//                 </div>
//                 <br />
//                 <Button
//                   id="signup-btn-tablet"
//                   fluid
//                   size='large'
//                   type='submit'
//                   disabled={invalid || submitting || submitFailed}
//                 >
//                   <div id="signup-btn-text-tablet">Sign Up</div>
//                 </Button>
//               </Segment>
//             </Form>
//           </Responsive>
//         </Responsive>

//         <Responsive 
//           {...Responsive.onlyComputer} 
//           as={Grid} 
//           id="signup-container-computer">
//           <Responsive 
//             {...Responsive.onlyComputer} 
//             as={Grid.Column} 
//             width={8}>
//               <img id="signup-page-image-computer" alt="people-chatting" src={require("../../assets/images/people-chatting.png")} />
//           </Responsive>
//           <Responsive
//           {...Responsive.onlyComputer} 
//           as={Grid.Column} 
//           width={8}>
//             <Form id="signup-form-container-computer" size='large' onSubmit={handleSubmit(this.onSubmit)}>
//               <Segment id="signup-form-computer" stacked>
//                 <Field
//                   name='firstName'
//                   component={this.renderNames}
//                   placeholder="First Name"
//                   validate={
//                     [
//                       required({ msg: 'First name is required' })
//                     ]
//                   }
//                 />
//                 <Field
//                   name='lastName'
//                   component={this.renderNames}
//                   placeholder="Last Name"
//                   validate={
//                     [
//                       required({ msg: 'Last name is required' })
//                     ]
//                   }
//                 />

//                 <Field
//                   name='email'
//                   component={this.renderEmail}
//                   validate={
//                     [
//                       required({ msg: 'Email is required' }),
//                       email({ msg: 'You must provide a valid email address' })
//                     ]
//                   }
//                 />
//                 <Field
//                   name='password'
//                   component={this.renderPassword}
//                   validate={
//                     [
//                       required({ msg: 'You must provide a password' }),
//                       length({ min: 6, msg: 'Your password must be at least 6 characters long' })
//                     ]
//                   }
//                 />
//                 <div>
//                   <Field name="language" component="select">
//                     <option value="English" flag="us">English</option>
//                     <option value="Chinese" flag="us">Chinese</option>
//                     <option value="French" flag="us">French</option>
//                     <option value="German" flag="us">German</option>
//                     <option value="Hindi" flag="us">Hindi</option>
//                     <option value="Japanese" flag="us">Japanese</option>
//                     <option value="Korean" flag="us">Korean</option>
//                     <option value="Portuguese" flag="us">Portuguese</option>
//                     <option value="Russian" flag="us">Russian</option>
//                     <option value="Spanish" flag="us">Spanish</option>
//                   </Field>
//                 </div>
//                 <br />
//                 <Button
//                   id="signup-btn-computer"
//                   fluid
//                   size='large'
//                   type='submit'
//                   disabled={invalid || submitting || submitFailed}
//                 >
//                   <div id="signup-btn-text-computer">Sign Up</div>
//                 </Button>
//               </Segment>
//             </Form>
//           </Responsive>
//         </Responsive>
//       </>
//     );
//   }
// }