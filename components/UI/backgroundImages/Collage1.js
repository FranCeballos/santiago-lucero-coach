import React, { useRef } from "react";
import classes from "./Collage1.module.css";
import ParallaxOnScroll from "../AnimatedComponents/ParallaxOnScroll";
import { useScroll, motion } from "framer-motion";
import SlideBottomLine from "../AnimatedComponents/SlideBottomLine";

const Collage1 = ({ font }) => {
  const offset = ["0 1", "1 1"];
  const word1Ref = useRef();
  const { scrollYProgress: scrollYWord1 } = useScroll({
    target: word1Ref,
    offset,
  });
  const word2Ref = useRef();
  const { scrollYProgress: scrollYWord2 } = useScroll({
    target: word2Ref,
    offset,
  });
  const word3Ref = useRef();
  const { scrollYProgress: scrollYWord3 } = useScroll({
    target: word3Ref,
    offset,
  });
  const word4Ref = useRef();
  const { scrollYProgress: scrollYWord4 } = useScroll({
    target: word4Ref,
    offset,
  });
  const word5Ref = useRef();
  const { scrollYProgress: scrollYWord5 } = useScroll({
    target: word5Ref,
    offset,
  });
  const word6Ref = useRef();
  const { scrollYProgress: scrollYWord6 } = useScroll({
    target: word6Ref,
    offset,
  });
  const word7Ref = useRef();
  const { scrollYProgress: scrollYWord7 } = useScroll({
    target: word7Ref,
    offset,
  });

  return (
    <div className={`${classes.container} ${font}`}>
      <div className={classes.content1} ref={word1Ref}>
        <SlideBottomLine scrollYProgress={scrollYWord1}>
          <p className={classes.word1}>FUERZA</p>
        </SlideBottomLine>
      </div>
      <div className={classes.content2} ref={word2Ref}>
        <SlideBottomLine fromLeft={false} scrollYProgress={scrollYWord2}>
          <p className={classes.word2}>PERSEVERANCIA</p>
        </SlideBottomLine>
      </div>
      <div className={classes.content3} ref={word3Ref}>
        <SlideBottomLine scrollYProgress={scrollYWord3}>
          <p className={classes.word3}>CONSTANCIA</p>
        </SlideBottomLine>
      </div>
      <div className={classes.content4} ref={word4Ref}>
        <SlideBottomLine fromLeft={false} scrollYProgress={scrollYWord4}>
          <p className={classes.word4}>AGILIDAD</p>
        </SlideBottomLine>
      </div>
      <div className={classes.content5} ref={word5Ref}>
        <SlideBottomLine scrollYProgress={scrollYWord5}>
          <p className={classes.word5}>RESISTENCIA</p>
        </SlideBottomLine>
      </div>
      <div className={classes.content6} ref={word6Ref}>
        <SlideBottomLine scrollYProgress={scrollYWord6}>
          <p className={classes.word6}>MOVIMIENTO</p>
        </SlideBottomLine>
      </div>
      <div className={classes.content7} ref={word7Ref}>
        <SlideBottomLine fromLeft={false} scrollYProgress={scrollYWord7}>
          <p className={classes.word7}>GRAVEDAD</p>
        </SlideBottomLine>
      </div>
    </div>
  );
};

export default Collage1;
