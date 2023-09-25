import React from "react";
import { useDispatch } from "react-redux";
import { toggleNav } from "@/store/modal-slice";
import ScaleOnHover from "@/components/UI/AnimatedComponents/ScaleOnHover";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const dispatch = useDispatch();
  return (
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
          Sumate
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
  );
};

export default Nav;
