import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], ["-" + distance, distance]);
};

const ParallaxOnScroll = ({
  children,
  scrollYProgress = 0,
  springOptions = { stiffness: 400, damping: 1000, bounce: 0.1 },
  distance = "50vh",
}) => {
  const springScroll = useSpring(scrollYProgress, springOptions);
  const y = useParallax(springScroll, distance);

  return <motion.div style={{ y }}>{children}</motion.div>;
};

export default ParallaxOnScroll;
