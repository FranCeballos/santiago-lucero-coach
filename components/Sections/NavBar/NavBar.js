import React from "react";
import { motion } from "framer-motion";
import classes from "./NavBar.module.css";
import { toggleNav } from "@/store/nav-slice";
import { useDispatch } from "react-redux";
import ScaleOnHover from "@/components/UI/AnimatedComponents/ScaleOnHover";

const NavBar = (props) => {
  const dispatch = useDispatch();
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={classes.container}
    >
      <div className={classes.grid}>
        <ScaleOnHover className={`${classes.link} ${classes.link1}`}>
          <a
            className={classes["fill"]}
            onClick={() => dispatch(toggleNav())}
            href="#acerca"
          >
            Acerca de mí
          </a>
        </ScaleOnHover>
        <ScaleOnHover className={`${classes.link} ${classes.link2}`}>
          <a
            className={classes["fill"]}
            onClick={() => dispatch(toggleNav())}
            href="#beneficios"
          >
            Tus beneficios
          </a>
        </ScaleOnHover>
        <ScaleOnHover className={`${classes.link} ${classes.link3}`}>
          <a
            className={classes["fill"]}
            onClick={() => dispatch(toggleNav())}
            href="#sumate"
          >
            Sumate al team
          </a>
        </ScaleOnHover>
        <ScaleOnHover className={`${classes.link} ${classes.link4}`}>
          <a
            className={classes["fill"]}
            onClick={() => dispatch(toggleNav())}
            href="#seguime"
          >
            Mis redes
          </a>
        </ScaleOnHover>
        <ScaleOnHover className={classes.whatsapp}>
          <a
            className={classes["fill"]}
            onClick={() => dispatch(toggleNav())}
            href="https://wa.me/5492615436947?text=Hola%20Santi!%20Quiero%20comenzar%20mi%20camino,%20lograr%20mis%20sueños%20y%20objetivos%20físicos."
            target="_blank"
          >
            Contactame
          </a>
        </ScaleOnHover>
      </div>
    </motion.nav>
  );
};

export default NavBar;
