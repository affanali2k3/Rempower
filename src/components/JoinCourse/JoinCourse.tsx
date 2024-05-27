import React from "react";
import "./JoinCourse.scss";
export const JoinCourse = () => {
  return (
    <section className="join-course-main-div">
      <img src="/pre-licensing.png" />

      <div className="course-purchase">
        <div className="upper-div">
          <h1>Join Our Course Now</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="lower-div">
          <input type="name" placeholder="First Name" />
          <input type="name" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <div className="shop-now-button">
            <p>SHOP NOW</p>
          </div>
        </div>
      </div>
    </section>
  );
};