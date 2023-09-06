import React from "react";
import SectionWrapper from "@/components/UI/SectionWrapper";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <SectionWrapper>
      <h2 className={classes.title}>¡Hola! Mi nombre es Santiago Lucero.</h2>
      <p className={classes.description}>
        Como personal trainer, mi meta es ayudarte a alcanzar{" "}
        <span className={classes["description__gradient1"]}>
          tus objetivos.
        </span>
        <br /> Caminemos juntos.
      </p>
    </SectionWrapper>
  );
};

export default About;
