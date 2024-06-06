import React from "react";
import "./HeroSectionLanding.scss";
export const HeroSectionLanding = () => {
  return (
    <section className="hero-sec-main">
      {window.innerWidth > 800 ? <img src="/hero-sec-desktop.png" /> : <img src="/hero-sec.png" />}
      <div className="text-button">
        <h1>
          Online Real Estate <span>Continuing Education</span> Courses
        </h1>
        <div
          className="learn-more"
          onClick={() => {
            window.location.href = "how-it-works";
          }}
        >
          Learn More
        </div>
      </div>
    </section>
  );
};
