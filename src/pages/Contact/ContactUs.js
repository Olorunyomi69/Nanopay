import React from "react";
import './contactus.css';
import contactLady from "./contactImage.png";

const ContactUs = () => {
  return (
    <div className="contactus-wrapper">
      <div className="contact-img">
        <img src={contactLady} alt="contact" />
      </div>

      <div className="contactus-text">
        <h1>Contact Us</h1>
        <p>
          While we operate as a bank within an app, we're committed to ensuring
          our customers never feel stranded. While everything you need is
          conveniently accessible on our app, we're here for assistance or even
          just a friendly chat whenever you require it.
        </p>
        <p>Call: +2348139260139</p>
        <p>Email: info@Nanopay.com</p>
        <p>Or Visit www.Nanopay.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
