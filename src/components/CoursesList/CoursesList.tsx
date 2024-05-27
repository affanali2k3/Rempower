import React from "react";
import "./CoursesList.scss";
import { Course } from "../Course/Course";
export const CoursesList = () => {
  return (
    <section className="courses-list-main">
      <Course image={"course-legis.png"} title="DL/MD Legislative" lectures={22} quizzes={5} duration="3" />
      <Course image={"course-legislative.png"} title="DL/MD Ethics" lectures={22} quizzes={5} duration="3" />
      <Course image={"course-brokerage.png"} title="DL/MD Brokerage" lectures={22} quizzes={5} duration="3" />
      <Course image={"course-housing.png"} title="DL/MD Fair Housing" lectures={22} quizzes={5} duration="3" />
      <Course image={"course-legis.png"} title="DL/MD Supervision" lectures={22} quizzes={5} duration="3" />
    </section>
  );
};
