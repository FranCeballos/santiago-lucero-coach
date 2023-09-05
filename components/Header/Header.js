import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";

const Header = ({ className }) => {
  return (
    <header className={`${classes.container} ${className}`}>
      <div className={classes.logo__container}>
        <Image
          src="/assets/img/logo/logoclear.png"
          width={35}
          height={35}
          alt="logo"
        />
        <p className={classes["logo__text"]}>Santi Lucero Coach</p>
      </div>
    </header>
  );
};

export default Header;
