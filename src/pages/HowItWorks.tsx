import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { OurMission } from "../components/OurMission/OurMission";
import { WhyChooseUs } from "../components/WhyChooseUs/WhyChooseUs";
import { HowItWorksSteps } from "../components/HowItWorksSteps/HowItWorksSteps";

export const HowItWorks = () => {
  return (
    <>
      <PageHeader heading="How It Works" subHeading="How It Works" />
      {/* <OurMission /> */}
      <HowItWorksSteps />
      {/* <WhyChooseUs /> */}
      {/* <CompanyStats /> */}
      {/* <BecomeInstructor /> */}
    </>
  );
};
