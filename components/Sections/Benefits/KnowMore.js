import React from "react";
import classes from "./KnowMore.module.css";
import { motion } from "framer-motion";
import { toggleVideo } from "@/store/modal-slice";
import { useDispatch } from "react-redux";
motion;

const KnowMore = (props) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      onClick={() => dispatch(toggleVideo())}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3 }}
      className={classes.container}
    >
      <p className={classes.text}>Conocé más sobre Construí tu Plan</p>
    </motion.div>
  );
};

export default KnowMore;
