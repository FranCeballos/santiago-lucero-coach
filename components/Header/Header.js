import React from "react";
import classes from "./Header.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const logoVariant = {
  hide: {
    y: "-100px",
  },
  show: { y: 0 },
};

const Header = ({ className }) => {
  return (
    <header className={`${classes.container} ${className}`}>
      <div className={classes.content}>
        <motion.div
          variants={logoVariant}
          initial="hide"
          animate="show"
          transition={{ duration: 2, type: "spring" }}
          className={classes["logo__container"]}
        >
          <Image
            src="/assets/img/logo/logoclear.png"
            width={100}
            height={100}
            alt="logo"
            className={classes.logo}
          />
        </motion.div>
        <motion.p
          variants={logoVariant}
          initial="hide"
          animate="show"
          transition={{ duration: 2.5, type: "spring" }}
          className={classes["logo__text"]}
        >
          Santiago Lucero Coach
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
