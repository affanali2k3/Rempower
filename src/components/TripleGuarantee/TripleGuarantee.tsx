import React from "react";
import "./TripleGuarantee.scss";
export const TripleGuarantee = () => {
  return (
    <section id="triple-guarantee" className="triple-guarantee-main">
      <div className="guarantee-content">
        <h1>The 4 Steps Process</h1>

        <div className="guarantee-items">
          <div className="guarantee-item">
            <img src="/1.png" />
            <p className="text">Create Account</p>
          </div>
          <div className="guarantee-item">
            <img src="/2.png" />
            <p className="text">Find Desired Course</p>
          </div>
          <div className="guarantee-item">
            <img src="/3.png" />
            <p className="text">Enroll Into Course</p>
          </div>
          <div className="guarantee-item">
            <img src="/3.png" />
            <p className="text">Start Learning</p>
          </div>
          <div className="button-div">
            <div
              className="learn-more-button"
              onClick={() => {
                window.location.href = "how-it-works";
              }}
            >
              <p>Learn More</p>
              <img src="/arrow.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="video-guarantee">
        <div className="step-card">
          <img src="/step-2.png" />
          <h1>Find Desired Course</h1>
          <p>Browse the courses and decide what you want to learn.</p>
        </div>
        <div className="step-card">
          <img src="/step-1.png" />
          <h1>Create Account</h1>
          <p>Create an account with your details and enter your existing license number if you have any.</p>
        </div>
        <div className="step-card">
          <img src="/step-3.png" />
          <h1>Enroll Into Course</h1>
          <p>Enroll into your desired course and start learning immediately</p>
        </div>
        <div className="step-card">
          <img src="/step-4.png" />
          <h1>Start Learning</h1>
          <p>Start learning the course, pass the exam and receive your certificate.</p>
        </div>
        {/* <iframe
          width={window.innerWidth > 800 ? window.innerWidth * 0.2 : window.innerWidth}
          height="315"
          src={`https://www.youtube.com/embed/MLpWrANjFbI`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> */}
      </div>
    </section>
  );
};
