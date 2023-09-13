import React from "react";
import classes from "./ServiceInfo.module.css";

const ServiceInfo = ({
  title,
  items,
  icon,
  itemsIcons,
  linkText,
  link,
  image,
}) => {
  console.log(itemsIcons);
  return (
    <div className={classes.container}>
      <div className={classes["image__container"]}>
        <img src={image} className={classes.image} alt="Service image" />
      </div>
      <div className={classes.content1}>
        <div className={classes.icon}>{icon}</div>
        <h4 className={classes.title}>{title}</h4>
      </div>
      <ul className={classes.list}>
        {items.map((item, index) => (
          <li className={classes["item__container"]} key={index}>
            <div className={classes["item__icon"]}>{itemsIcons[index]}</div>
            <p className={classes["item__text"]}>{item}</p>
          </li>
        ))}
      </ul>
      <a href={link} target="_blank" className={classes.link}>
        {linkText}
      </a>
    </div>
  );
};

export default ServiceInfo;