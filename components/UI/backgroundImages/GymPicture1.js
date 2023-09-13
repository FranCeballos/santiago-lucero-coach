import React, { useRef } from "react";
import Image from "next/image";
import classes from "./GymPicture1.module.css";
import ParallaxOnScroll from "../AnimatedComponents/ParallaxOnScroll";
import { useScroll } from "framer-motion";

const GymPicture1 = (props) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  return (
    <ParallaxOnScroll
      scrollYProgress={scrollYProgress}
      distance="20vh"
      springOptions={{ stiffness: 100, damping: 90 }}
    >
      <div className={classes.container} ref={ref}>
        <Image
          src="/assets/img/backgrounds/gym1.webp"
          width={1536}
          height={1024}
          className={classes.image}
          alt="gym accesories"
        />
      </div>
    </ParallaxOnScroll>
  );
};

export default GymPicture1;
