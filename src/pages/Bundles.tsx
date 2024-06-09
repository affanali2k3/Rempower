import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { CoursesList } from "../components/CoursesList/CoursesList";
import { BundlesList } from "../components/BundlesList/BundlesList";

export const Bundles = () => {
  return (
    <>
      <PageHeader heading="Real Estate Continuing Education" subHeading="Real Estate Continuing Education" />
      <BundlesList />
    </>
  );
};
