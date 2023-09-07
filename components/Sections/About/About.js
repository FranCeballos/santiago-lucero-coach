import React, { useRef } from "react";
import { motion } from "framer-motion";
import useDimension from "@/hooks/useDimension";
import SectionWrapper from "@/components/UI/SectionWrapper";
import Exercise1 from "@/components/UI/Videos/Exercise1";

import SlideOnScroll from "@/components/UI/AnimatedComponents/SlideOnScroll";
import classes from "./About.module.css";

const About = (props) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const videoRef = useRef();
  const { width } = useDimension();

  return (
    <SectionWrapper>
      <div className={classes["content-container"]}>
        <div ref={containerRef} className={classes["text-container"]}>
          <div ref={titleRef}>
            <SlideOnScroll
              screenWidth={width}
              target={containerRef}
              offset={["0 0.9", "1 1"]}
            >
              <h2>¡Hola! Mi nombre es Santiago Lucero.</h2>
            </SlideOnScroll>
          </div>
          <div ref={descriptionRef}>
            <SlideOnScroll
              screenWidth={width}
              target={containerRef}
              offset={["0 0.8", "1 1"]}
            >
              <motion.p className={classes.description}>
                Como personal trainer, mi meta es ayudarte a alcanzar{" "}
                <span className={classes["description__gradient1"]}>
                  tus objetivos.
                </span>
                <br /> Estoy para acompañarte en este camino, en esta decision
                de cambiar tu vida.
              </motion.p>
            </SlideOnScroll>
          </div>
        </div>
        <div ref={videoRef}>
          <SlideOnScroll
            screenWidth={width}
            target={videoRef}
            offset={["0 0.8", "1 1"]}
            fromLeft={false}
          >
            <Exercise1 />
          </SlideOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
