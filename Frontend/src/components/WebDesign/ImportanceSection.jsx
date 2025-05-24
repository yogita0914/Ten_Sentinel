import React from "react";
import { motion } from 'framer-motion';
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";
import { importanceListItems } from "./WebDesignData";
import ServiceCard from "../DevelopmentPageComponent/ServiceCard";

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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const ImportanceSection = () => (
  <motion.section
    className="flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <motion.div variants={childVariants}>
      <SectionTitle title={"Why is Web Design Important?"} />
    </motion.div>

    <motion.div variants={childVariants}>
      <LightParagraph>
        A high-quality website is crucial for your business's success in the
        digital world. Here are some key benefits of investing in
        professional web design services.
      </LightParagraph>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {importanceListItems.map((service, index) => (
        <motion.div key={index} variants={childVariants}>
          <ServiceCard
            icon={<img src={service.icon} alt={service.title} className="w-12 h-12" />}
            title={service.title}
            description={service.description}
            index={index}
          />
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);
