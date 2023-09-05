import React from "react";
import { motion } from "framer-motion";
import classes from "./Hero.module.css";

const heroVariations = {
  hide: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const Hero = (props) => {
  const duration = 4;
  return (
    <section className={classes.container}>
      <motion.h1
        variants={heroVariations}
        initial="hide"
        animate="show"
        transition={{
          duration,
          type: "spring",
        }}
        className={classes.title}
      >
        Si el éxito
      </motion.h1>
      <motion.h1
        variants={heroVariations}
        initial="hide"
        animate="show"
        transition={{
          delay: 0.3,
          duration,
          type: "spring",
        }}
        className={classes.title}
      >
        estuviese asegurado,
      </motion.h1>

      <motion.p
        variants={heroVariations}
        initial="hide"
        animate="show"
        transition={{
          delay: 1.75,
          duration,
          type: "spring",
        }}
        className={classes["title-gradient"]}
      >
        ¿Qué harías para lograrlo?
      </motion.p>
    </section>
  );
};

export default Hero;
