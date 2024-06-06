import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { CoursesList } from "../components/CoursesList/CoursesList";

export const ContinuingEducation = () => {
  return (
    <>
      <PageHeader heading="Courses" subHeading="Courses" />
      <CoursesList />
    </>
  );
};
