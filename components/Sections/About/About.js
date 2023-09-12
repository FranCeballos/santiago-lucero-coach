import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import useDimension from "@/hooks/useDimension";
import SectionWrapper from "@/components/UI/SectionWrapper";
import Exercise1 from "@/components/UI/Videos/Exercise1";

import SlideOnScroll from "@/components/UI/AnimatedComponents/SlideOnScroll";
import classes from "./About.module.css";

const About = (props) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const { scrollYProgress: scrollYTitle } = useScroll({
    target: titleRef,
    offset: ["0 0.9", "0.9 0.9"],
  });
  const descriptionRef = useRef();
  const { scrollYProgress: scrollYDescription } = useScroll({
    target: titleRef,
    offset: ["0 0.8", "0.8 0.8"],
  });
  const videoRef = useRef();
  const { scrollYProgress: scrollYVideo } = useScroll({
    target: containerRef,
    offset: ["0 0.9", "1 1"],
  });
  const { width } = useDimension();
  const springOptions = { stiffness: 450, bounce: 0.1, damping: 90 };

  return (
    <SectionWrapper>
      <div className={classes["content-container"]}>
        <div ref={containerRef} className={classes["text-container"]}>
          <div ref={titleRef}>
            <SlideOnScroll
              scrollYProgress={scrollYTitle}
              screenWidth={width}
              springOptions={springOptions}
            >
              <h2 className={classes.title}>
                ¡Hola! Mi nombre es
                <br /> Santiago Lucero.
              </h2>
            </SlideOnScroll>
          </div>
          <div ref={descriptionRef}>
            <SlideOnScroll
              screenWidth={width}
              scrollYProgress={scrollYDescription}
              springOptions={springOptions}
            >
              <motion.p className={classes.description}>
                Como personal trainer, estoy para ayudarte a alcanzar{" "}
                <span className={classes["description__gradient1"]}>
                  tus objetivos.
                </span>
                <br />
                Para acompañarte en este camino, en esta decisión de cambiar tu
                vida.
              </motion.p>
            </SlideOnScroll>
          </div>
        </div>
        <div ref={videoRef}>
          <SlideOnScroll
            screenWidth={width}
            scrollYProgress={scrollYVideo}
            fromLeft={false}
            springOptions={springOptions}
          >
            <Exercise1 />
          </SlideOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
