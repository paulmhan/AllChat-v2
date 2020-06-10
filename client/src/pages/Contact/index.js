import React, { Component } from "react";
import ContactForm from "../../components/ContactForm";
import emailjs from 'emailjs-com';
import "./style.css";

class Contact extends Component {

  state = {
    name:"",
    email:"",
    text:"",
    success: ""
  }

  sendEmail = event => {
    event.preventDefault();
    emailjs.sendForm('default_service', 'template_8ThKxTDq', "#contact-form", "user_UQ5mLuD7ryVQD1fmgdrQX")
      .then(() => {
          this.setState({
            name:"",
            email:"",
            text:"",
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
      <div className="container mt-2">
        <div className="row header">
          <div className="col-12">
            <h1 className="contact-header">Contact Us</h1>
          </div>
        </div>
        <div className="row" align="center">
          <div className="col-4 mx-auto">
            <p>
              We value all input and continously strive to make this a better application. Please feel free to contact us with suggestions and/or comments!
            </p>
          </div>
        </div>
        <ContactForm 
        submit = { this.sendEmail }
        handleInputChange = { this.handleInputChange }
        username = { this.state.name }
        useremail = { this.state.email }
        message = { this.state.text }
        success = { this.state.success }
        />
      </div>

    );
  }
}


export default Contact;


