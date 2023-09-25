import React from "react";
import { motion } from "framer-motion";
import classes from "./Modal.module.css";

import { useSelector } from "react-redux";

import Nav from "./Nav";
import Video1 from "./Video1";

const Modal = (props) => {
  const { showNav, showVideo } = useSelector((state) => state.modal);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={classes.container}
    >
      {showNav && <Nav />}
      {showVideo && <Video1 />}
    </motion.nav>
  );
};

export default Modal;
