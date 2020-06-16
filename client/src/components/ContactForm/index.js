import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { email, required } from "redux-form-validators";
import content from "../../content.js";
import "./style.css";

class ContactForm extends Component {

  renderSendBtn(language) {
    switch (language) {
      case "es":
        return content.send.es;
      case "zh":
        return content.send.zh;
      case "ar":
        return content.send.ar;
      case "fr":
        return content.send.fr;
      case "de":
        return content.send.de;
      case "hi":
        return content.send.hi;
      case "it":
        return content.send.it;
      case "ja":
        return content.send.ja;
      case "ko":
        return content.send.ko;
      case "ru":
        return content.send.ru;
      case "tl":
        return content.send.tl;
      case "te":
        return content.send.te;
      case "vi":
        return content.send.vi;
      default:
        return content.send.en;
    }
  }

  renderValidation(language) {
    switch (language) {
      case "es":
        return content.validate.es;
      case "zh":
        return content.validate.zh;
      case "ar":
        return content.validate.ar;
      case "fr":
        return content.validate.fr;
      case "de":
        return content.validate.de;
      case "hi":
        return content.validate.hi;
      case "it":
        return content.validate.it;
      case "ja":
        return content.validate.ja;
      case "ko":
        return content.validate.ko;
      case "ru":
        return content.validate.ru;
      case "tl":
        return content.validate.tl;
      case "te":
        return content.validate.te;
      case "vi":
        return content.validate.vi;
      default:
        return content.validate.en;
    }
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
    return (
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
            name='email'
            component={this.renderEmail}
            validate={
              [
                required({ msg: this.renderValidation(this.props.user?.language) }),
                email({ msg: 'You must provide a valid email address.' })
              ]
            }
          />
          <Field
            name="description"
            component={this.renderDescription}
            validate={
              required({ msg: this.renderValidation(this.props.user?.language) })
            }
          />
          <Button
            id="contact-submit-btn"
            fluid
            size='large'
            type='submit'
            disabled={invalid || submitting || submitFailed}
          >
            {this.renderSendBtn(this.props.user?.language)}
          </Button>
          <p>{this.props.success}</p>
        </Form>
      </>
    );
  }

}

export default reduxForm({ form: "contact" })(ContactForm);
