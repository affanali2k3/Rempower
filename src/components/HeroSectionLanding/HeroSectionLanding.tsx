import React from "react";
import "./HeroSectionLanding.scss";
export const HeroSectionLanding = () => {
  return (
    <section className="hero-sec-main">
      {window.innerWidth > 800 ? <img src="/hero-sec-desktop.png" /> : <img src="/hero-sec-desktop.png" />}
      <div className="text-button">
        <h1>
          Maryland Real Estate <span>Pre Licensing</span> and Online <span>Continuing Education</span>
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
