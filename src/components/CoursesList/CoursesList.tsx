import React from "react";
import "./CoursesList.scss";
import { Course } from "../Course/Course";
export const CoursesList = () => {
  return (
    <section className="courses-list-main">
      <div className="header">
        <h1 className="online-classes">CLASSES ARE 100% ON ZOOM</h1>
        {/* <p>Take your classes on the go, when and where you want!</p> */}
      </div>
      <div className="pre-licensing-category category-splitter">
        <h1>Maryland Real Estate License Course</h1>
      </div>
      <div className="pre-licensing-courses-list">
        <Course
          url="https://real-estate-empower.teachable.com/p/mdprelicense"
          id={1}
          image={"pre-licensing.jpg"}
          title="Maryland Real Estate Prelicensing Comprehensive Program"
          // lectures={22}
          // quizzes={5}
          // duration="3"
          subtitle="60 Hours of Approved Prelicense Education"
        />
      </div>
      {/* <div className="bundles-category category-splitter">
        <h1>Course Bundles</h1>
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
      <div className="continuing-education-category category-splitter">
        <h1>Continuing Education</h1>
      </div>

      <div className="continuing-education-courses-list">
        <Course
          url="https://real-estate-empower.teachable.com/p/dl-md-legislative1"
          id={1}
          image={"course-legis.png"}
          title="DL/MD Legislative"
          // lectures={22}
          // quizzes={5}
          // duration="3"
          subtitle="3 Hours MD Mandatory"
        />
        <Course
          url="https://real-estate-empower.teachable.com/p/dl-md-ethics1"
          id={2}
          image={"course-legislative.png"}
          title="DL/MD Ethics"
          subtitle="3 Hours MD Mandatory"
          // lectures={22}
          // quizzes={5}
          // duration="3"
        />
        <Course
          url={"https://real-estate-empower.teachable.com/p/mrec-brokerage-relationships-and-disclosure1"}
          id={3}
          image={"course-brokerage.png"}
          title="DL/MREC Brokerage Relationships and Disclosure"
          subtitle="3 Hours MD Mandatory"
          // lectures={22}
          // quizzes={5}
          // duration="3"
        />
        <Course
          url={"https://real-estate-empower.teachable.com/p/dl-md-fair-housing11"}
          id={4}
          image={"course-housing.png"}
          title="DL/MD Fair Housing"
          subtitle="1.5 Hours MD Mandatory & 1.5 Hours MD Electives"
          // lectures={22}
          // quizzes={5}
          // duration="3"
        />
        <Course
          url={"https://real-estate-empower.teachable.com/p/dl-mrec-required-supervision1"}
          id={5}
          image={"course-legis.png"}
          title="DL/MREC Required Supervision"
          subtitle="3 Hours MD Mandatory for Brokers / MD Electives for Salespersons"
          // lectures={22}
          // quizzes={5}
          // duration="3"
        />
        <Course
          url={"https://real-estate-empower.teachable.com/p/dl-mrec-required-supervision1"}
          id={5}
          image={"course-legis.png"}
          title="DL/Safety 101"
          subtitle="3 Hours MD Electives"
          // lectures={22}
          // quizzes={5}
          // duration="3"
        />
      </div> */}
    </section>
  );
};
