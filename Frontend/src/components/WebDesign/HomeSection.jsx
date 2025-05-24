import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";
import { Button } from "./Button";
import HomeSVG from "../../assets/WebDesignPage/home.svg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const HomeSection = () => (
  <motion.section
    className="flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <motion.div variants={childVariants}>
      <SectionTitle title={"Looking for Top-Tier Web Design Services?"} />
    </motion.div>

    <motion.div variants={childVariants}>
      <LightParagraph>
        Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business. In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world. At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
      </LightParagraph>
    </motion.div>

    <motion.p className="text-lg md:text-xl" variants={childVariants}>
      We deliver customized web design solutions tailored to your brand, ensuring a seamless user experience that stands out from the competition.
    </motion.p>

    <motion.img
      src={HomeSVG}
      className="w-52 self-center md:w-80"
      variants={childVariants}
      alt="Home illustration"
    />

    <motion.a href="#contact" className="flex justify-center" variants={childVariants}>
      <Button text={"Get FREE Assessment Report!"} />
    </motion.a>
  </motion.section>
);
