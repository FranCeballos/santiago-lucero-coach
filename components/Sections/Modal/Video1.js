import React from "react";
import { motion } from "framer-motion";
import classes from "./Video1.module.css";

const Video1 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={classes.container}
    >
      <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/j5xx8KkcY6g?si=eGxeADEikwEkaNiP"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </motion.div>
  );
};

export default Video1;
