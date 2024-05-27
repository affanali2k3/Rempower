import React from "react";
import "./Newsletter.scss";
export const Newsletter = () => {
  return (
    <section className="newsletter-main">
      <div className="newsletter-secondary">
        <h1>Join Our Weekly Money-Making Strategy</h1>
        <p className="text">
          As a customer oriented company, we’re committed to getting you the help you need anytime. If our FAQs did not answer your
          questions, you can enter your details and will get back to you as soon as possible
        </p>
        <div className="inputs">
          <input type="name" placeholder="First Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="join-button">
          <p>JOIN THE COMMUNITY</p>
        </div>
      </div>
    </section>
  );
};
