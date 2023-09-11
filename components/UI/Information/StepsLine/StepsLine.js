import React from "react";
import classes from "./StepsLine.module.css";
import Step from "./Step";

const StepsLine = ({ steps }) => {
  return (
    <div className={classes.container}>
      {steps.map((step, index) => (
        <Step key={index} num={index + 1} title={step} />
      ))}
    </div>
  );
};

export default StepsLine;
