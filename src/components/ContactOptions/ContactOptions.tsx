import React from "react";
import "./ContactOptions.scss";
export const ContactOptions = () => {
  return (
    <section className="contact-options-main">
      <h1>Contact Info</h1>
      <div className="email">
        <img src="/email.png" />
        <div className="text">
          <a href="mailto:support@rempower.com">support@rempower.com</a>
        </div>
      </div>
      <div className="email">
        <img src="/phone.png" />
        <div className="text">
          <a href="tel:+12025580240">(202) 558-0240</a>
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
