import React from "react";
import ChatIcon from "@/components/UI/Icons/ChatIcon";
import { motion } from "framer-motion";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["icon__container"]}>
        <ChatIcon />
      </div>
      <h4 className={classes["text"]}>Todo por WhatsApp</h4>
      <motion.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={classes["whatsapp__link"]}
        href="https://wa.me/5492615436947?text=Hola%20Santi!%20Quiero%20comenzar%20mi%20camino,%20lograr%20mis%20sueños%20y%20objetivos%20físicos."
        target="_blank"
      >
        <p className={classes["whatsapp__text"]}>Comenzá ya</p>
      </motion.a>
    </div>
  );
};

export default Contact;
