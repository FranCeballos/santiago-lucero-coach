import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Information1 from "@/components/UI/Information/Information1";
import FadeInOnScroll from "@/components/UI/AnimatedComponents/FadeInOnScroll";

import BookIcon from "@/components/UI/Icons/BookIcon";
import FireIcon from "@/components/UI/Icons/FireIcon";
import HeartIcon from "@/components/UI/Icons/HeartIcon";
import SettingIcon from "@/components/UI/Icons/SettingIcon";

import classes from "./MainBenefits.module.css";

const MainBenefits = (props) => {
  const offset = ["0 1", "0.7 0.7"];
  const ref1 = useRef();
  const { scrollYProgress: scrollYEle1 } = useScroll({
    target: ref1,
    offset,
  });
  const ref2 = useRef();
  const { scrollYProgress: scrollYEle2 } = useScroll({
    target: ref2,
    offset,
  });
  const ref3 = useRef();
  const { scrollYProgress: scrollYEle3 } = useScroll({
    target: ref3,
    offset,
  });
  const ref4 = useRef();
  const { scrollYProgress: scrollYEle4 } = useScroll({
    target: ref4,
    offset,
  });
  return (
    <div className={classes["container"]}>
      <div ref={ref1}>
        <FadeInOnScroll scrollYProgress={scrollYEle1}>
          <Information1
            iconComponent={<FireIcon />}
            sup="1"
            title="Plan de entrenamiento"
            description="¿Hipertrofia, estética, rendimiento? Lo que quieras. Vos no debés adaptarte al plan, el plan se adapta a vos. No importa si recién comenzás o si ya llevás un camino."
          />
        </FadeInOnScroll>
      </div>
      <div ref={ref2}>
        <FadeInOnScroll scrollYProgress={scrollYEle2}>
          <Information1
            iconComponent={<HeartIcon />}
            title="Plan de nutrición"
            sup="2"
            description="Complementá tu entrenamiento acorde a tus objetivos, ya sea pérdida de grasa, aumento de masa muscular, mantener el peso u otro que tengas."
          />
        </FadeInOnScroll>
      </div>
      <div ref={ref3}>
        <FadeInOnScroll scrollYProgress={scrollYEle3}>
          <Information1
            iconComponent={<BookIcon />}
            title="Libro de recetas"
            description="Descubrí formas ricas, sanas y diferentes de alimentarte. Sin ideas no te vas a quedar."
          />
        </FadeInOnScroll>
      </div>
      <div ref={ref4}>
        <FadeInOnScroll scrollYProgress={scrollYEle4}>
          <Information1
            iconComponent={<SettingIcon />}
            title="Ajustes constantes"
            sup="3"
            description="Estoy disponible para vos. Para atender tus necesidades y preguntas; con correcciones, planificación, dieta, evaluación de sensaciones y checkeos cada 15 días. Sos mi prioridad."
          />
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default MainBenefits;
