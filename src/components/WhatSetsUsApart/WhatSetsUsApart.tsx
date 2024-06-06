import React from "react";
import "./WhatSetsUsApart.scss";
export const WhatSetsUsApart = () => {
  return (
    <section className="what-sets-us-apart-main">
      <h1>HOW IT WORKS</h1>
      <h2>Four steps to quickly get started into learning your desired course.</h2>
      <p>
        We know what you need and what you want. We care for you and provide you the easiest way to start learning your desired online
        course, enhance your skills and get some rewards for yourself. Rempower is your best friend.
      </p>
      <h1 className="online-classes">CLASSES ARE 100% ONLINE</h1>
      <p>Take your classes on the go, when and where you want!</p>
      {/* <div className="video-responsive">
        <iframe
        className="iframe"
        width={window.innerWidth > 800 ? window.innerWidth * 0.9 : window.innerWidth}
        height={window.innerWidth > 800 ? "700" : "415"}
        src={`https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1&controls=0&disablekb=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
      </div> */}
    </section>
  );
};
