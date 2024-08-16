import React from "react";
import "./TripleGuarantee.scss";
export const TripleGuarantee = () => {
  return (
    <section id="triple-guarantee" className="triple-guarantee-main">
      <div className="guarantee-content">
        <h1>Triple Guarantee</h1>
        <div className="para-wrapper">
          <p className="para">
            We are committed to ensuring that joining our family is the smartest financial decision you’ll ever make, building a
            long-lasting relationship with us. We achieve this by promising you three key outcomes
          </p>
        </div>
        <div className="guarantee-items">
          <div className="guarantee-item">
            <img src="/1.png" />
            <p className="text">You will successfully pass the exam.</p>
          </div>
          <div className="guarantee-item">
            <img src="/2.png" />
            <p className="text">You will achieve six-figure earnings within your first year.</p>
          </div>
          <div className="guarantee-item">
            <img src="/3.png" />
            <p className="text">You will experience steady growth in your business each year, tailored to your goals.</p>
          </div>
          <div
            className="button-div"
            onClick={() => {
              window.location.href = "about";
            }}
          >
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
      </div>

      {/* <div className="video-guarantee">
        <iframe
          width={window.innerWidth > 800 ? window.innerWidth * 0.2 : window.innerWidth}
          height="315"
          src={`https://www.youtube.com/embed/MLpWrANjFbI`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div> */}
    </section>
  );
};
