import React from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], ["-" + distance, distance]);
};

const ParallaxOnScroll = ({ children, target }) => {
  const { scrollYProgress } = useScroll({ target });
  const y = useParallax(scrollYProgress, "35vh");

  return <motion.div style={{ y }}>{children}</motion.div>;
};

export default ParallaxOnScroll;
