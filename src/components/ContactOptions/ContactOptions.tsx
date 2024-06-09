import React from "react";
import "./ContactOptions.scss";
export const ContactOptions = () => {
  return (
    <section className="contact-options-main">
      <h1>Contact Info</h1>
      <div className="email">
        <img src="/email.png" />
        <div className="text">
          <p>support@rempower.com</p>
        </div>
      </div>
      <div className="email">
        <img src="/phone.png" />
        <div className="text">
          <p>(202) 558-0240</p>
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
