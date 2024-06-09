import React from "react";
import "./OurStory.scss";
export const OurStory = () => {
  return (
    <section className="our-story-main">
      <div className="mission-div">
        <img src="/mission.png" />
        <div className="content">
          <h1>Our Mission</h1>

          <p className="story">
            REMPOWER provides online, self-paced continuing education courses for real estate brokers and salespersons license renewal. All
            of the courses are accredited for Continuing Education Units (CEUs) in the State of Maryland. Rempower also provides real estate
            salesperson prelicensing via zoom classes.
          </p>
          <div
            className="learn-more-button"
            onClick={() => {
              window.location.href = "about";
            }}
          >
            <p>Learn More</p>
            <img src="/arrow.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
