import React from "react";
import globeimg from "../images/globeimg.png";
import "./Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-body">
      <Header/>
      <div className="contact-container">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-left"
        >
          <div className="contact-left-title">
            <h1>Drop Us a Line</h1>
            <hr />
          </div>
          <input
            type="hidden"
            name="access_key"
            value="9d8a43b7-bd10-40f0-8af8-e8bfa22a1b46"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-inputs"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-inputs"
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Your Phone number"
            className="contact-inputs"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-inputs"
            required
          ></textarea>
          <button type="submit">submit</button>
        </form>
        <div className="contact-right">
          <img src={globeimg} alt="Globe" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;