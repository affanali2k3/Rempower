import React from "react";
import "./CoursesList.scss";
import { Course } from "../Course/Course";
export const CoursesList = () => {
  return (
    <section className="courses-list-main">
      <Course
        url="https://real-estate-empower.teachable.com/p/dl-md-legislative1"
        id={1}
        image={"course-legis.png"}
        title="DL/MD Legislative"
        lectures={22}
        quizzes={5}
        duration="3"
      />
      <Course
        url="https://real-estate-empower.teachable.com/p/dl-md-ethics1"
        id={2}
        image={"course-legislative.png"}
        title="DL/MD Ethics"
        lectures={22}
        quizzes={5}
        duration="3"
      />
      <Course
        url={"https://real-estate-empower.teachable.com/p/mrec-brokerage-relationships-and-disclosure1"}
        id={3}
        image={"course-brokerage.png"}
        title="DL/MD Brokerage"
        lectures={22}
        quizzes={5}
        duration="3"
      />
      <Course
        url={"https://real-estate-empower.teachable.com/p/dl-md-fair-housing11"}
        id={4}
        image={"course-housing.png"}
        title="DL/MD Fair Housing"
        lectures={22}
        quizzes={5}
        duration="3"
      />
      <Course
        url={"https://real-estate-empower.teachable.com/p/dl-mrec-required-supervision1"}
        id={5}
        image={"course-legis.png"}
        title="DL/MD Supervision"
        lectures={22}
        quizzes={5}
        duration="3"
      />
    </section>
  );
};
