import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./Header.module.css";
import Bars2Icon from "../UI/Icons/Bars2Icon";
import { toggleNav } from "@/store/nav-slice";
import CrossIcon from "../UI/Icons/CrossIcon";

const logoVariant = {
  hide: {
    y: "-100px",
  },
  show: { y: 0 },
};

const navVariant = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.3,
      },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.3 },
    },
  },
};

const Header = ({ className }) => {
  const dispatch = useDispatch();
  const { showNav } = useSelector((state) => state.nav);

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
      <AnimatePresence mode="wait">
        {showNav ? (
          <motion.div
            key="cross"
            onClick={() => dispatch(toggleNav())}
            variants={navVariant}
            initial="hide"
            animate="show"
            exit="exit"
            transition={{ duration: 0.5, type: "spring" }}
            className={classes["nav__button"]}
          >
            <CrossIcon />
          </motion.div>
        ) : (
          <motion.div
            key="bars"
            onClick={() => dispatch(toggleNav())}
            variants={navVariant}
            initial="hide"
            animate="show"
            exit="exit"
            transition={{ duration: 0.5, type: "spring" }}
            className={classes["nav__button"]}
          >
            <Bars2Icon />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
