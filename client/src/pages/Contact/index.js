import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ContactForm from "../../components/ContactForm";
import emailjs from 'emailjs-com';
import "./style.css";

class Contact extends Component {

  state = {
    name: "",
    email: "",
    text: "",
    success: ""
  }

  sendEmail = event => {
    event.preventDefault();
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
          <Header id="contact-header" as="h1">Tell us what you think of our app! Any improvements we can make?</Header>
        </Grid.Column>
        <Grid.Column  width={16}>
          <Header id="contact-form-directions" as="h4">Please fill out the following fields:</Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <ContactForm
            submit={this.sendEmail}
            handleInputChange={this.handleInputChange}
            username={this.state.name}
            useremail={this.state.email}
            message={this.state.text}
            success={this.state.success}
          />
        </Grid.Column>

      </Grid>
    );
  }
}


export default Contact;
