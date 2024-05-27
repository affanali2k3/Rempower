import React from "react";
import { HeroSectionLanding } from "../components/HeroSectionLanding/HeroSectionLanding";
import { WhatSetsUsApart } from "../components/WhatSetsUsApart/WhatSetsUsApart";
import { TripleGuarantee } from "../components/TripleGuarantee/TripleGuarantee";
import { WhyApproachWorks } from "../components/WhyApproachWorks/WhyApproachWorks";
import { WeHaveBestPrograms } from "../components/WeHaveBestPrograms/WeHaveBestPrograms";
import { OurStory } from "../components/OurStory/OurStory";
import { SuccessStudents } from "../components/SuccessStudents/SuccessStudents";
import { Sponsors } from "../components/Sponsors/Sponsors";
export const LandingPage = () => {
  return (
    <>
      {" "}
      <HeroSectionLanding />
      <Sponsors />
      <WhatSetsUsApart />
      <TripleGuarantee />
      <WhyApproachWorks />
      <WeHaveBestPrograms />
      <OurStory />
      <SuccessStudents />
    </>
  );
};
