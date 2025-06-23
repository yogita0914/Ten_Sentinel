import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import { staggerContainer } from './motion';
import Project1 from "../../assets/Development/project1.avif";
import Project2 from "../../assets/Development/project2.avif";

const project1 = Project1
const project2 = Project2

const ProjectsSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Our Work"
        title="Featured Projects"
        description="See how we've helped businesses solve complex challenges with technology."
      />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <ProjectCard
          title="E-commerce Platform"
          image={project1}
          description="Built a high-performance online store with personalized recommendations, AI-powered search, and seamless checkout experience."
          technologies={['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis']}
          link="#"
        />
        <ProjectCard
          title="Healthcare Management System"
          image={project2}
          description="Developed a HIPAA-compliant platform for patient records, appointment scheduling, and telemedicine capabilities."
          technologies={['Vue.js', '.NET Core', 'PostgreSQL', 'Azure']}
          link="#"
        />
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full border border-blue-200 shadow-sm relative overflow-hidden group"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#eff6ff",
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">View All Projects</span>
          <motion.span
            className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
          />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;