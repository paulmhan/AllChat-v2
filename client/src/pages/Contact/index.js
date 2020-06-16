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

  onSubmit = event => {
    // event.preventDefault();
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
          <Header id="contact-header" as="h1">Contact Us:</Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <Header id="contact-par" as="p">We value all and any feedback! Whether you have suggestions on components we can improve on, questions on the functionality of our application, or just want to say hello, our inbox is always open.</Header>
        </Grid.Column>
        <Grid.Column  width={16}>
          <Header id="contact-form-directions" as="h4">Please fill out the following fields:</Header>
        </Grid.Column>
        <Grid.Column width={16}>
          <ContactForm
            onSubmit={this.onSubmit}
            success={this.state.success}
          />
        </Grid.Column>

      </Grid>
    );
  }
}


export default Contact;
