import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const FadeInOnScroll = ({ children, target, offset }) => {
  const { scrollYProgress } = useScroll({
    target,
    offset,
  });
  const opacity = useSpring(scrollYProgress);
  return <motion.div style={{ opacity }}>{children}</motion.div>;
};

export default FadeInOnScroll;
