import React from "react";
import SectionWrapper from "@/components/UI/SectionWrapper";
import MainBenefits from "./MainBenefits";
import Plans from "./Plans";

import classes from "./Benefits.module.css";

const Benefits = (props) => {
  return (
    <SectionWrapper>
      <h2 id="beneficios" className={classes.title}>
        Tus beneficios. <br />
        Tu futuro.
      </h2>
      <MainBenefits />
      <Plans />
    </SectionWrapper>
  );
};

export default Benefits;
