// src/components/VAPT/VAPTAbout.js
import React from 'react';
import { motion } from "framer-motion";

export const VAPTAbout = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-12 xl:flex-row self-center">
      
      {/* Image */}
      <motion.img
        src="https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96426.jpg?t=st=1746717179~exp=1746720779~hmac=ec69305cae6b1d83cc8fbe5954009b397b8637ea89d3cf529e4e4d5496904ad9&w=996"
        alt="About VAPT Services"
        className="sm:h-[400px] self-center rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Text Content */}
      <div className="flex flex-col gap-4 text-base md:text-lg xl:max-w-[480px]">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-semibold text-xl md:text-2xl lg:text-3xl"
        >
          About Our VAPT Services
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Vulnerability Assessment and Penetration Testing (VAPT) is a critical security process that uncovers weaknesses across your systems, applications, networks, and digital assets. Our VAPT services identify vulnerabilities and evaluate the potential impact of exploitation by malicious actors, helping you understand and manage security risks more effectively.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Unlike many providers, we go beyond simple detection and reporting. Our team works closely with you to support the full remediation process and conduct thorough re-validation, ensuring that identified vulnerabilities are properly resolved and your environment is secure.
        </motion.p>
      </div>
    </section>
  );
};
