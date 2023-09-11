import React from "react";
import SectionWrapper from "@/components/UI/SectionWrapper";
import StepsLine from "../../UI/Information/StepsLine/StepsLine";
import classes from "./Join.module.css";

const Join = (props) => {
  return (
    <SectionWrapper>
      <div className={classes["background__container"]}>
        <img
          src="/assets/img/backgrounds/gym2.webp"
          alt="gym equipment"
          className={classes["background__image"]}
        />
      </div>
      <h2 className={classes.title}>
        Sumate al team.
        <br />
        Online o presencial.
      </h2>
      <StepsLine
        steps={[
          "Contactame. Comentame tus objetivos y qué plan querés seguir.",
          "Llená el formulario.",
          "Enviame el comprobante del pago.",
          "Te envío el material y estoy para caminar junto a vos.",
        ]}
      />
    </SectionWrapper>
  );
};

export default Join;
