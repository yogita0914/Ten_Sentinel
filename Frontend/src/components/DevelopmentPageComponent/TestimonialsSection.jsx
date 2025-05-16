import React from 'react';
import { motion } from 'framer-motion';
import Testimonial from './Testimonial';
import SectionHeader from './SectionHeader';
import { staggerContainer, fadeUp } from './motion';

const testimonials = [
  {
    quote: 'The team delivered our project ahead of schedule with exceptional quality. Highly recommended!',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    quote: 'Their attention to detail and clean code made our app maintenance a breeze.',
    author: 'Michael Chen',
    role: 'CTO, Finova Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    quote: 'We\'ve worked with many developers, but none matched their expertise and professionalism.',
    author: 'Emily Rodriguez',
    role: 'Product Manager, RetailPlus',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
  }
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-gray/50
">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Client Feedback"
        title="What Our Clients Say"
        description="Don't just take our word for it - hear from our satisfied clients."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={fadeUp}>
            <Testimonial {...testimonial} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;