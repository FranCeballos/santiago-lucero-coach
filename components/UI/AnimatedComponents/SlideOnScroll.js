import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SlideOnScroll = ({
  children,
  target,
  offset,
  screenWidth,
  fromLeft = true,
}) => {
  const { scrollYProgress } = useScroll({
    target,
    offset,
  });
  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [fromLeft ? -screenWidth : screenWidth, 0]
    ),
    { stiffness: 50, bounce: 0.1 }
  );
  return <motion.div style={{ x }}>{children}</motion.div>;
};

export default SlideOnScroll;
