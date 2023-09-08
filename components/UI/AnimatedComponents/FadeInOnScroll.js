import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const FadeInOnScroll = ({ children, scrollYProgress }) => {
  const opacity = useSpring(scrollYProgress);
  return <motion.div style={{ opacity }}>{children}</motion.div>;
};

export default FadeInOnScroll;
