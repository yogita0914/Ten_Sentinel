import React from 'react';
import { motion } from 'framer-motion';
import ProcessStepCard from './ProcessStepCard';
import SectionHeader from './SectionHeader';
import { staggerContainer, fadeUp } from './motion';

const processSteps = [
  {
    step: '🔍',
    title: 'Discovery',
    description: 'We analyze requirements and plan the project architecture.'
  },
  {
    step: '🎨',
    title: 'Design',
    description: 'Creating wireframes, prototypes, and UI/UX designs.'
  },
  {
    step: '👨‍💻',
    title: 'Development',
    description: 'Agile development with regular updates and iterations.'
  },
  {
    step: '🚀',
    title: 'Deployment',
    description: 'Smooth deployment with CI/CD pipelines and monitoring.'
  },
  {
    step: '🛠️',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and improvements.'
  }
];

const ProcessSection = () => (
  <section className="py-10 md:py-15 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Our Approach"
        title="Streamlined Development Process"
        description="A proven methodology that ensures quality, transparency, and on-time delivery."
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {processSteps.map((step, index) => (
          <motion.div key={index} variants={fadeUp}>
            <ProcessStepCard {...step} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;