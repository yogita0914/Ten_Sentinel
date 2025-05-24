import React from "react";
import { motion } from 'framer-motion';
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";
import { importanceListItems } from "./WebDesignData";
import { staggerContainer } from "../DevelopmentPageComponent/motion";
import ServiceCard from "../DevelopmentPageComponent/ServiceCard";

export const ImportanceSection = () => (
  <section className="flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40">
    <SectionTitle title={"Why is Web Design Important?"} />
    <LightParagraph>
      A high-quality website is crucial for your business's success in the
      digital world. Here are some key benefits of investing in
      professional web design services.
    </LightParagraph>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {importanceListItems.map((service, index) => (
        <ServiceCard
          key={index}
          icon={<img src={service.icon} alt={service.title} className="w-12 h-12" />}
          title={service.title}
          description={service.description}
          index={index}
        />
      ))}
    </motion.div>
  </section>
);
