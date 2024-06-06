import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { PreLicensingFirstFold } from "../components/PreLicensingFirstFold/PreLicensingFirstFold";
import { JoinCourse } from "../components/JoinCourse/JoinCourse";
import { CourseTabs } from "../components/CourseTabs/CourseTabs";
import { CourseOverview } from "../components/CourseOverview/CourseOverview";
import { FAQ } from "../components/FAQ/FAQ";

export const PreLicensing = () => {
  return (
    <>
      <PageHeader heading="Pre Licensing" subHeading="Pre Licensing" />
      <PreLicensingFirstFold />
      <JoinCourse />
      {/* <CourseTabs /> */}
      <CourseOverview />
      <FAQ />
    </>
  );
};
