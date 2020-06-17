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

  renderEmailValidation(language) {
    switch (language) {
      case "es":
        return content.validateemail.es;
      case "zh":
        return content.validateemail.zh;
      case "ar":
        return content.validateemail.ar;
      case "fr":
        return content.validateemail.fr;
      case "de":
        return content.validateemail.de;
      case "hi":
        return content.validateemail.hi;
      case "it":
        return content.validateemail.it;
      case "ja":
        return content.validateemail.ja;
      case "ko":
        return content.validateemail.ko;
      case "ru":
        return content.validateemail.ru;
      case "tl":
        return content.validateemail.tl;
      case "te":
        return content.validateemail.te;
      case "vi":
        return content.validateemail.vi;
      default:
        return content.validateemail.en;
    }
  }

  renderContactFeedback(language) {
    switch (language) {
      case "es":
        return content.contactfeed.es;
      case "zh":
        return content.contactfeed.zh;
      case "ar":
        return content.contactfeed.ar;
      case "fr":
        return content.contactfeed.fr;
      case "de":
        return content.contactfeed.de;
      case "hi":
        return content.contactfeed.hi;
      case "it":
        return content.contactfeed.it;
      case "ja":
        return content.contactfeed.ja;
      case "ko":
        return content.contactfeed.ko;
      case "ru":
        return content.contactfeed.ru;
      case "tl":
        return content.contactfeed.tl;
      case "te":
        return content.contactfeed.te;
      case "vi":
        return content.contactfeed.vi;
      default:
        return content.contactfeed.en;
    }
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
        placeholder="someone@example.com"
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
        placeholder={this.renderContactFeedback(this.props.user?.language)}
      />
    )
  }

  onSubmit = () => {
    const { reset } = this.props;
    this.props.onSubmit();
    reset("contact");

  }

  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <>
        <Form id="contact-form" onSubmit={handleSubmit(this.onSubmit)} method="POST">
          <Field
            name='email'
            component={this.renderEmail}
            validate={
              [
                required({ msg: this.renderValidation(this.props.user?.language) }),
                email({ msg: this.renderEmailValidation(this.props.user?.language) })
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
