import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import classes from "./SlideBottomLine.module.css";

const SlideBottomLine = ({
  children,
  scrollYProgress = 0,
  fromLeft = true,
  springOptions = { stiffness: 450, bounce: 0.1, damping: 90 },
}) => {
  const x = fromLeft ? "-400%" : "400%";
  const scaleX = useSpring(
    useTransform(scrollYProgress, [1, 0], [5, 0]),
    springOptions
  );
  const originX = fromLeft ? 0 : 1;
  return (
    <div>
      {children}
      <motion.div
        style={{ x, scaleX, originX }}
        className={classes.line}
      ></motion.div>
    </div>
  );
};

export default SlideBottomLine;
