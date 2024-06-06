import React from "react";
import "./BundlesList.scss";
import { Course } from "../Course/Course";
export const BundlesList = () => {
  return (
    <section className="courses-list-main">
      <div className="header">
        <h1 className="online-classes">CLASSES ARE 100% ONLINE</h1>
        <p>Take your classes on the go, when and where you want!</p>
      </div>

      <div className="bundles-list">
        <Course
          url="https://real-estate-empower.teachable.com/p/fiver-pass-for-brokers-team-leaders-sales-manager"
          id={1}
          image={"fiverr-pass.png"}
          title="Fiverr Pass for Brokers, Team Leaders, Sales Manager"
          // lectures={22}
          // quizzes={5}
          // duration="3"
          subtitle="5 Courses Included"
        />
        <Course
          url="https://real-estate-empower.teachable.com/p/fiver-pass-for-salespersons-and-associate-brokers"
          id={2}
          image={"fiverr-pass.png"}
          title="Fiverr Pass for Salespersons and Associate Brokers"
          // lectures={22}
          // quizzes={5}
          // duration="3"
          subtitle="5 Courses Included"
        />
      </div>
    </section>
  );
};
