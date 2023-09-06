import React from "react";
import classes from "./SectionWrapper.module.css";

const SectionWrapper = ({ children, style }) => {
  return (
    <section style={style} className={classes.container}>
      {children}
    </section>
  );
};

export default SectionWrapper;
