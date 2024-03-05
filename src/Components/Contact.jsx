import React from "react";
import "../Styles/Contact.scss";
import Contact3d from "../Styles/contact3d.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={Contact3d} alt="Contact Image" />
      </div>
      <div className="contact-right">
        <h1>Contact us!</h1>
        <a href="https://www.instagram.com/nixiedigital/?hl=tr" target="blank">INSTAGRAM</a>
        <a href="mailto:nixie-digital@outlook.com">nixie-digital@outlook.com</a>
      </div>
    </div>
  );
};

export default Contact;
