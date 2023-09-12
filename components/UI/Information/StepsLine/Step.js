import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import classes from "./Step.module.css";

const Step = ({ title, num }) => {
  const springOptions = { stiffness: 450, bounce: 0.1, damping: 90 };

  // Line scaleY
  const containerRef = useRef();
  const { scrollYProgress: scrollYLine } = useScroll({
    target: containerRef,
    offset: ["0 0.9", "1 1"],
  });
  const lineYScaleSpring = useSpring(scrollYLine, springOptions);

  // Content scale
  const contentRef = useRef();
  const { scrollYProgress: scrollYContent } = useScroll({
    target: contentRef,
    offset: ["0 0.9", "0.9 0.9"],
  });
  const contentScaleSpring = useSpring(scrollYContent, springOptions);

  const showLine = num !== 1;
  return (
    <div ref={containerRef} className={classes.container}>
      {showLine && (
        <motion.div
          style={{ scaleY: lineYScaleSpring, originY: 0 }}
          className={classes.line}
        ></motion.div>
      )}
      <motion.div
        ref={contentRef}
        style={{ scale: contentScaleSpring }}
        className={classes.content}
      >
        <div className={classes.circle}>
          <p className={classes.number}>{num}</p>
        </div>
        <h3 className={classes.title}>{title}</h3>
      </motion.div>
    </div>
  );
};

export default Step;
