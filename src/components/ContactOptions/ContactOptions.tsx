import React from "react";
import "./ContactOptions.scss";
export const ContactOptions = () => {
  return (
    <section className="contact-options-main">
      <h1>Contact Info</h1>
      <div className="email">
        <img src="/email.png" />
        <div className="text">
          <h2>Email Support</h2>
          <p>support@rempower.com</p>
        </div>
      </div>
      <div className="email">
        <img src="/phone.png" />
        <div className="text">
          <h2>Phone No:</h2>
          <p>+1 301-637-7663</p>
        </div>
      </div>
      <h2>Follow Us</h2>
      <div className="socials">
        <img src="/twitter.png" />
        <img src="/linkedn.png" />
        <img src="/instagram.png" />
      </div>
    </section>
  );
};
