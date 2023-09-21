import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";

const Footer = (props) => {
  return (
    <footer className={classes.container}>
      <div className={classes.disclaimers}>
        <p className={classes.disclaimer}>
          1. Los planes no son mágicos, requieren de tu esfuerzo, de modificar
          hábitos y de aceptar que probablemente no vas a notar cambios de forma
          inmediata. ¿Eso quiere decir que el plan es malo? Definitivamente no,
          es la ciencia la que demuestra que la pérdida de grasa comienza a
          partir de la semana 4-8 y la ganancia de masa muscular a partir de la
          semana 12.
        </p>
        <p className={classes.disclaimer}>
          2. No trabajo con dietas estrictas ni regímenes que no son sostenibles
          en el tiempo.
        </p>
        <p className={classes.disclaimer}>
          3. Los chequeos pueden ser cada 10 o 30 días. ¿Chequeo significa que
          tengo que mandar fotos cada 10 o 30 días? Puede ser solo si es
          necesario, pero además, es una instancia para que vos puedas decirme
          cómo te estás sintiendo, qué te gustaría que sea diferente, qué
          entrenamiento, ejercicio o comida diaria te está costando, y los
          motivos. Es un espacio de diálogo que permite que tu planificación sea
          cada vez más exacta y eficiente.
        </p>
        <p className={classes.disclaimer}>
          4. No se envía el plan con todos sus componentes hasta que se muestre
          el comprobante de pago. Una vez enviado el plan no hay devoluciones.
        </p>
      </div>
      <div className={classes["footer__grid"]}>
        <div className={classes.links}>
          <a className={classes.link} href="#acerca">
            Acerca de mí
          </a>
          <a className={classes.link} href="#beneficios">
            Tus beneficios
          </a>
          <a className={classes.link} href="#sumate">
            Sumate al team
          </a>
          <a className={classes.link} href="#seguime">
            Seguime en las redes
          </a>
        </div>
        <div className={classes["logo__container"]}>
          <Image
            src="/assets/img/logo/logoclear.png"
            width={30}
            height={30}
            alt="logo image"
          />
          <p className={classes["logo__title"]}>Santiago Lucero Coach</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
