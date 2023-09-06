import React from "react";
import useDimension from "@/hooks/useDimension";
import { motion } from "framer-motion";

import classes from "./Exercise1.module.css";

const Exercise1 = ({ y }) => {
  const { width } = useDimension();
  return (
    <motion.div
      style={{ y: width > 768 ? y : 0 }}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, delay: 3, type: "spring" }}
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
        <source src="/assets/videos/mainhero.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default Exercise1;
