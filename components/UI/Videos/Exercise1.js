import React from "react";
import useDimension from "@/hooks/use-dimension";
import { motion } from "framer-motion";

import classes from "./Exercise1.module.css";

const Exercise1 = ({ y = 0, x = 0 }) => {
  const { width } = useDimension();
  return (
    <motion.div
      style={{ y: width > 768 ? y : 0 }}
      className={classes["video-container"]}
    >
      <video
        className={classes["video"]}
        poster="./assets/videos/mainhero-poster.jpeg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videos/exercise1.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default Exercise1;
