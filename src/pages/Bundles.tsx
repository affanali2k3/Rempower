import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { CoursesList } from "../components/CoursesList/CoursesList";
import { BundlesList } from "../components/BundlesList/BundlesList";

export const Bundles = () => {
  return (
    <>
      <PageHeader heading="Course Bundles" subHeading="Course Bundles" />
      <BundlesList />
    </>
  );
};
