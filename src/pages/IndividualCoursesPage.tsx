import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { IndividualCoursesList } from "../components/IndividualCoursesList/IndividualCoursesList";

export const IndividualCoursesPage = () => {
  return (
    <>
      <PageHeader heading="Continuing Education Individual Courses" subHeading="Continuing Education Individual Courses" />
      <IndividualCoursesList />
    </>
  );
};
