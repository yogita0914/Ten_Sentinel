import React from 'react';
import { motion } from 'framer-motion';
import WhyChooseUsCard from './WhyChooseUsCard';
import SectionHeader from './SectionHeader';
import { staggerContainer, fadeUp } from './motion'; 

const whyChooseUs = [
  {
    icon: '🔄',
    title: 'Agile Process',
    description: 'Iterative development with continuous feedback loops.'
  },
  {
    icon: '📈',
    title: 'Scalability',
    description: 'Architected for growth with cloud-native solutions.'
  },
  {
    icon: '🧑‍💻',
    title: 'Clean Code',
    description: 'Well-structured, documented, and maintainable codebase.'
  },
  {
    icon: '🔐',
    title: 'Security',
    description: 'Built with security best practices from the ground up.'
  },
  {
    icon: '⏱️',
    title: 'On-time Delivery',
    description: 'We meet deadlines without compromising quality.'
  }
];

const WhyChooseUsSection = () => (
  <section className="py-10 md:py-15 bg-gradient-to-br from-orange-100 via-pink-100 to-red-100
">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Our Advantages"
        title="Why Clients Choose Us"
        description="We go beyond just writing code to deliver exceptional value to our clients."
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {whyChooseUs.map((item, index) => (
          <motion.div key={index} variants={fadeUp}>
            <WhyChooseUsCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUsSection;