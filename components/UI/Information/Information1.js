import React from "react";
import classes from "./Information1.module.css";

const Information1 = ({ title, description, iconComponent }) => {
  return (
    <div>
      <div className={classes.icon}>{iconComponent}</div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default Information1;
