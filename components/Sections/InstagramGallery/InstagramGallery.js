import React, { useRef } from "react";
import SectionWrapper from "@/components/UI/SectionWrapper";
import classes from "./InstagramGallery.module.css";
import Image from "next/image";
import SlideOnScroll from "@/components/UI/AnimatedComponents/SlideOnScroll";
import useDimension from "@/hooks/useDimension";
import { useScroll, motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    y: 400,
    transition: {
      duration: 0.05,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.05,
    },
  },
};

const InstagramGallery = ({ postsData }) => {
  const limitedPosts = postsData.data.slice(0, 12);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0.9", "0.9 0.9"],
  });
  const { width } = useDimension();
  const springOptions = { stiffness: 450, bounce: 0.1, damping: 90 };
  return (
    <SectionWrapper>
      <h2 id="seguime" className={classes.title}>
        No te pierdas ningún consejo <br /> en mis redes.
      </h2>
      <div className={classes["instagram__title-container"]} ref={containerRef}>
        <SlideOnScroll
          scrollYProgress={scrollYProgress}
          screenWidth={width}
          springOptions={springOptions}
        >
          <h3 className={classes.subtitle}>
            <a
              href="https://www.instagram.com/santiagolucerocoach/"
              target="_blank"
            >
              Instagram
            </a>
          </h3>
        </SlideOnScroll>
        <SlideOnScroll
          scrollYProgress={scrollYProgress}
          screenWidth={width}
          springOptions={springOptions}
          fromLeft={false}
        >
          <a
            href="https://www.instagram.com/santiagolucerocoach/"
            target="_blank"
          >
            <h4 className={classes.subtitle2}>Mis últimos posteos</h4>
          </a>
        </SlideOnScroll>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="exit"
        className={classes["instagram__container"]}
      >
        {limitedPosts.map((post) => (
          <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 1, type: "spring" }}
            key={post.id}
            className={classes["post__container"]}
          >
            <a href={post.permalink} target="_blank">
              <Image
                className={classes.image}
                src={post.thumbnail_url}
                width={300}
                height={300}
                alt="post image"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
      <div className={classes["icons__container"]}></div>
    </SectionWrapper>
  );
};

export default InstagramGallery;
