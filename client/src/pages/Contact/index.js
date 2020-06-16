import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ContactForm from "../../components/ContactForm";
import emailjs from 'emailjs-com';
import { connect } from 'react-redux';
import { compose } from "redux";
import { loadUser } from "../../actions/auth";
import content from "../../content.js";

import "./style.css";

class Contact extends Component {

  state = {
    email: "",
    text: "",
    success: ""
  }

  async componentDidMount() {
    this.props.user || await this.props.loadUser();
  }

  renderContact(language) {
    switch (language) {
      case "es":
        return content.contact.es;
      case "zh":
        return content.contact.zh;
      case "ar":
        return content.contact.ar;
      case "fr":
        return content.contact.fr;
      case "de":
        return content.contact.de;
      case "hi":
        return content.contact.hi;
      case "it":
        return content.contact.it;
      case "ja":
        return content.contact.ja;
      case "ko":
        return content.contact.ko;
      case "ru":
        return content.contact.ru;
      case "tl":
        return content.contact.tl;
      case "te":
        return content.contact.te;
      case "vi":
        return content.contact.vi;
      default:
        return content.contact.en;
    };
  }

  renderContactParagraph(language) {
    switch (language) {
      case "es":
        return content.contactpar.es;
      case "zh":
        return content.contactpar.zh;
      case "ar":
        return content.contactpar.ar;
      case "fr":
        return content.contactpar.fr;
      case "de":
        return content.contactpar.de;
      case "hi":
        return content.contactpar.hi;
      case "it":
        return content.contactpar.it;
      case "ja":
        return content.contactpar.ja;
      case "ko":
        return content.contactpar.ko;
      case "ru":
        return content.contactpar.ru;
      case "tl":
        return content.contactpar.tl;
      case "te":
        return content.contactpar.te;
      case "vi":
        return content.contactpar.vi;
      default:
        return content.contactpar.en;
    };
  }

  onSubmit = () => {
    emailjs.sendForm('default_service', 'template_8ThKxTDq', "#contact-form", "user_UQ5mLuD7ryVQD1fmgdrQX")
      .then(() => {
        this.setState({
          name: "",
          email: "",
          text: "",
          success: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
      });
  }

  handleInputChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Grid id="contact-container">
        <Grid.Column width={16}>
          <Header id="contact-header" as="h1">{this.renderContact(this.props.user?.language)}</Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <Header id="contact-par" as="p">{this.renderContactParagraph(this.props.user?.language)}</Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <ContactForm
            onSubmit={this.onSubmit}
            success={this.state.success}
            user={this.props.user}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.currentUser
  }
}

export default compose(
  connect(mapStateToProps, { loadUser }),
)(Contact)
