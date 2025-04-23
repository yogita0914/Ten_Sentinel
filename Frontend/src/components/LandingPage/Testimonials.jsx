import React, { useState } from "react";
import { motion } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechSolutions Inc.",
    content: "CyberSapiens transformed our security posture. After implementing their recommendations, we passed our compliance audit with zero findings for the first time ever.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Security Director, FinTrust Bank",
    content: "Their penetration testing uncovered vulnerabilities our team had missed for years. The detailed remediation plan saved us countless hours of work.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "IT Manager, HealthCare Plus",
    content: "The employee training program reduced our phishing click-through rate from 35% to under 2% in just three months. Remarkable results!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "COO, RetailChain Corp",
    content: "Their 24/7 monitoring stopped a ransomware attack before it could spread. The quick response saved us millions in potential damages.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 5,
    name: "James Peterson",
    role: "CEO, Startup Ventures",
    content: "As a small business, we thought enterprise-grade security was out of reach. CyberSapiens made it affordable and manageable for our team.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-blue-50" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full">
              Client Success Stories
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from organizations we've protected
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-80 sm:h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`absolute inset-0 bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col ${index === currentIndex ? 'z-10' : 'z-0'}`}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-cyan-100 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-cyan-500 text-white rounded-full p-1 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 flex-1">"{testimonial.content}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="text-cyan-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-12 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-12 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndex ? 'bg-cyan-600 sm:w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
        >
          {[
            { name: "ISO 27001 Certified", icon: "🔒" },
            { name: "500+ Clients", icon: "😊" },
            { name: "4.9/5 Rating", icon: "⭐" },
            { name: "24/7 Support", icon: "🛡️" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="flex items-center bg-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
            >
              <span className="text-lg sm:text-xl mr-1 sm:mr-2">{badge.icon}</span>
              <span className="font-medium text-gray-800">{badge.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;