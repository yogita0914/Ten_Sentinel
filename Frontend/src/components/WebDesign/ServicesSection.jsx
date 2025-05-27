import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";
import ServicesSVG from "../../assets/WebDesignPage/services.svg";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ServicesSection = () => (
  <motion.section
    className="flex flex-col bg-blue-50 gap-4 py-12 px-6 md:gap-8 lg:px-40"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.div variants={childVariants}>
      <SectionTitle title={"What Are Web Design Services?"} />
    </motion.div>

    <motion.div
      className="flex flex-col gap-8 md:flex-row md:gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex-1" variants={childVariants}>
        <LightParagraph>
          Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business. In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world. At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
        </LightParagraph>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        variants={childVariants}
      >
        <img
          src={ServicesSVG}
          className="w-full max-w-96 self-center md:w-2/5 lg:max-w-full"
          alt="Web Design Services Illustration"
        />
      </motion.div>
    </motion.div>
  </motion.section>
);
