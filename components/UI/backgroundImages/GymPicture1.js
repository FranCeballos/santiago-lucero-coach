import React, { useRef } from "react";
import Image from "next/image";
import classes from "./GymPicture1.module.css";
import ParallaxOnScroll from "../AnimatedComponents/ParallaxOnScroll";

const GymPicture1 = (props) => {
  const ref = useRef();
  return (
    <ParallaxOnScroll>
      <div className={classes.container} ref={ref}>
        <Image
          src="/assets/img/backgrounds/gym1.webp"
          width={1920}
          height={1280}
          className={classes.image}
        />
      </div>
    </ParallaxOnScroll>
  );
};

export default GymPicture1;
