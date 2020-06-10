import React from "react";
import "./style.css";

const ContactForm = props => {
  return (
    <div className="w-75 mx-auto contact-container mb-5">
      <form id="contact-form" onSubmit={props.submit} method="POST">
        <div className="form-group mx-5 mt-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" onChange={props.handleInputChange} value={props.username}/>
        </div>
        <div className="form-group mx-5">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={props.handleInputChange} value={props.useremail}/>
        </div>
        <div className="form-group mx-5">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" name="text" onChange={props.handleInputChange} value={props.message}></textarea>
        </div>
        <button type="submit" className="btn btn-primary mx-5 mb-3">Submit</button>
        <p className="ml-5">{props.success}</p>
      </form>
    </div>
  );
}



export default ContactForm;