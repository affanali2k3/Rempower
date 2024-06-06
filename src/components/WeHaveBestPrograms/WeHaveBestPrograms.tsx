import React from "react";
import "./WeHaveBestPrograms.scss";
export const WeHaveBestPrograms = () => {
  return (
    <section className="we-have-best-programs-main">
      <h1>We Have Best Programs For You</h1>
      <div className="pre-licensing-programs">
        <div
          className="program-pre-licensing"
          onClick={() => {
            window.location.href = "courses";
          }}
        >
          <img src="/pre-licensing-program.png" />
          <div className="content">
            <h2>Pre Licensing</h2>
          </div>
        </div>
        <div
          className="program-pre-licensing"
          onClick={() => {
            window.location.href = "courses";
          }}
        >
          <img src="/ce.png" />
          <div className="content">
            <h2>Continuing Education</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
