import React from "react";
import SectionWrapper from "@/components/UI/SectionWrapper";
import StepsLine from "../../UI/Information/StepsLine/StepsLine";
import Contact from "./Contact";
import Discount from "./Discount";

import classes from "./Join.module.css";

const Join = (props) => {
  return (
    <SectionWrapper style={{ padding: 0 }}>
      <div className={classes["image__container"]}>
        <div className={classes["title__container"]}>
          <h2 className={classes.title}>
            Sumate al team.
            <br />
            Online o presencial.
          </h2>
        </div>
      </div>
      <SectionWrapper style={{ paddingTop: 0 }}>
        <div className={classes["steps__container"]}>
          <StepsLine
            steps={[
              "Contactame. Comentame tus objetivos y qué plan querés seguir.",
              "Llená el formulario.",
              "Enviá el comprobante de pago.",
              "Te envío el material y estoy para caminar junto a vos.",
            ]}
          />
        </div>
        <div className={classes["special-info__container"]}>
          <Discount />
          <Contact />
        </div>
      </SectionWrapper>
    </SectionWrapper>
  );
};

export default Join;
