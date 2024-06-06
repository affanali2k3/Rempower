import React from "react";
import "./WhyChooseUs.scss";
export const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-main">
      <div className="content">
        <h1>WHY REMPOWER?</h1>
        <div className="item">
          {/* <h2>CONTENT AND PLATFORM ARE UP TO DATE </h2> */}
          <p>
            Our clients have learned that we put our core values into practice. Our philosophy is to provide superior strategic management
            consulting, business coaching, financial services, motivational/ continuing education seminars that advance and optimize
            performance and returns on investment for our clients – can only become a reality if we pay particular attention to continuous
            improvements in the solutions we offer and are passionate about our service culture. We have established long-term relationships
            with our clients because we bring effectiveness, value, and service. As a result, our customers stay with us.
          </p>
        </div>
      </div>
      <img src="/why-choose-us.png" />
    </section>
  );
};
