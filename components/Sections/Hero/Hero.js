import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import classes from "./Hero.module.css";
import ParallaxOnScroll from "@/components/UI/AnimatedComponents/ParallaxOnScroll";

const textVariants = {
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const duration = 4;

  return (
    <motion.section className={classes.container}>
      <div className={classes["video-container"]}>
        <video
          className={classes["video"]}
          poster="./assets/videos/mainhero-poster.jpeg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/mainhero.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.div ref={ref} className={classes["title-container"]}>
        <ParallaxOnScroll
          scrollYProgress={scrollYProgress}
          distance="30vh"
          springOptions={{ stiffness: 450, bounce: 0.1, damping: 90 }}
        >
          <motion.h1
            variants={textVariants}
            initial="hide"
            animate="show"
            transition={{
              duration,
              type: "spring",
            }}
            className={classes.title}
          >
            SI EL ÉXITO
          </motion.h1>
          <motion.h1
            variants={textVariants}
            initial="hide"
            animate="show"
            transition={{
              delay: 0.3,
              duration,
              type: "spring",
            }}
            className={classes.title}
          >
            ESTUVIESE ASEGURADO,
          </motion.h1>
          <motion.h1
            variants={textVariants}
            initial="hide"
            animate="show"
            transition={{
              delay: 1.75,
              duration,
              type: "spring",
            }}
            className={classes["title-gradient"]}
          >
            ¿QUÉ HARÍAS PARA LOGRARLO?
          </motion.h1>
        </ParallaxOnScroll>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
