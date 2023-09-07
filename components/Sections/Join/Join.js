import React, { useRef } from "react";
import SectionWrapper from "@/components/UI/SectionWrapper";
import StepsLine from "./StepsLine";
import classes from "./Join.module.css";

const Join = (props) => {
  return (
    <SectionWrapper>
      <h2 className={classes.title}>
        Sumate al team.
        <br />
        Online o presencial.
      </h2>
      <StepsLine />
    </SectionWrapper>
  );
};

export default Join;
