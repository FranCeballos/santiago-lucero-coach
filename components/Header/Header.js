import React from "react";
import classes from "./Header.module.css";
import { AnimatePresence, motion } from "framer-motion";

const logoVariant = {
  hide: {
    y: "-100px",
  },
  show: { y: 0 },
};

const Header = ({ className }) => {
  return (
    <header className={`${classes.container} ${className}`}>
      <div className={classes.logo__container}>
        <motion.img
          variants={logoVariant}
          initial="hide"
          animate="show"
          transition={{ duration: 2, type: "spring" }}
          src="/assets/img/logo/logoclear.png"
          width={30}
          height={30}
          alt="logo"
        />
        <motion.p
          variants={logoVariant}
          initial="hide"
          animate="show"
          transition={{ duration: 2.5, type: "spring" }}
          className={classes["logo__text"]}
        >
          Santi Lucero Coach
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
