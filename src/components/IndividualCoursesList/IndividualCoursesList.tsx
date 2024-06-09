import React from "react";
import "./IndividualCoursesList.scss";
import { Course } from "../Course/Course";
export const IndividualCoursesList = () => {
  return (
    <section className="courses-list-main">
      <div className="header">
        <h1 className="online-classes">All of the courses necessary to renew your license</h1>
        {/* <p></p> */}
      </div>

      <div className="continuing-education-category category-splitter">
        <h1>Maryland Continuing Education Courses</h1>
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
      </div>
    </section>
  );
};
