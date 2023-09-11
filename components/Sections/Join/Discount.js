import React from "react";
import GiftIcon from "@/components/UI/Icons/GiftIcon";
import classes from "./Discount.module.css";

const Discount = (props) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["icon"]}>
        <GiftIcon />
      </div>
      <p className={classes["text"]}>
        Sumate con un amigo y ambos obtienen un 10% de descuento.
      </p>
    </div>
  );
};

export default Discount;
