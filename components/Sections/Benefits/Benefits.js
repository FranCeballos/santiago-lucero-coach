import React, { useRef } from "react";
import SectionWrapper from "@/components/UI/SectionWrapper";
import classes from "./Benefits.module.css";
import Information1 from "@/components/UI/Information/Information1";
import BookIcon from "@/components/UI/Icons/BookIcon";
import FireIcon from "@/components/UI/Icons/FireIcon";
import HeartIcon from "@/components/UI/Icons/HeartIcon";
import SettingIcon from "@/components/UI/Icons/SettingIcon";
import FadeInOnScroll from "@/components/UI/AnimatedComponents/FadeInOnScroll";

const Benefits = (props) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  return (
    <SectionWrapper>
      <h2 className={classes.title}>
        Tus beneficios. <br />
        Tu futuro.
      </h2>
      <div className={classes["benefits-container"]}>
        <div ref={ref1}>
          <FadeInOnScroll target={ref1} offset={["0 1", "0.7 0.7"]}>
            <Information1
              iconComponent={<FireIcon />}
              title="Plan de entrenamiento"
              description="Hipertrofia, estética, rendimiento, tanto para ¡principiantes, intermedios y avanzados!"
            />
          </FadeInOnScroll>
        </div>
        <div ref={ref2}>
          <FadeInOnScroll target={ref2} offset={["0 1", "0.7 0.7"]}>
            <Information1
              iconComponent={<HeartIcon />}
              title="Plan de nutrición"
              description="Complementa tu entrenamiento acorde a tus objetivos, ya sea perdida de grasa, aumento de masa muscular, mantener el peso u otros."
            />
          </FadeInOnScroll>
        </div>
        <div ref={ref3}>
          <FadeInOnScroll target={ref3} offset={["0 1", "0.7 0.7"]}>
            <Information1
              iconComponent={<BookIcon />}
              title="Libro de recetas"
              description="Para que puedas descubrir maneras ricas, sanas y diferentes de alimentarte, para lograr tus objetivos."
            />
          </FadeInOnScroll>
        </div>
        <div ref={ref4}>
          <FadeInOnScroll target={ref4} offset={["0 1", "0.7 0.7"]}>
            <Information1
              iconComponent={<SettingIcon />}
              title="Ajustes constantes"
              description="Estoy disponible 24h para vos. Atender tus necesidades, preguntas, correcciones, planificación, dieta, evaluación de sensaciones y más. Sos mi prioridad."
            />
          </FadeInOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Benefits;
