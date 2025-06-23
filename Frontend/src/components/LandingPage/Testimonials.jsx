import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Portrait1 from '../../assets/LandingPage/portait1.jpg'
import Portrait2 from '../../assets/LandingPage/portait2.jpg'
import Portrait3 from '../../assets/LandingPage/portait3.jpg'
import Portrait4 from '../../assets/LandingPage/portait4.jpg'
import Portrait5 from '../../assets/LandingPage/portait5.jpg'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechSolutions Inc.",
    content:
      "CyberSapiens transformed our security posture. After implementing their recommendations, we passed our compliance audit with zero findings for the first time ever.",
    rating: 5,
    avatar: Portrait1,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Security Director, FinTrust Bank",
    content:
      "Their penetration testing uncovered vulnerabilities our team had missed for years. The detailed remediation plan saved us countless hours of work.",
    rating: 5,
    avatar: Portrait2,
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "IT Manager, HealthCare Plus",
    content:
      "The employee training program reduced our phishing click-through rate from 35% to under 2% in just three months. Remarkable results!",
    rating: 4,
    avatar: Portrait3,
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "COO, RetailChain Corp",
    content:
      "Their 24/7 monitoring stopped a ransomware attack before it could spread. The quick response saved us millions in potential damages.",
    rating: 5,
    avatar: Portrait4,
  },
  {
    id: 5,
    name: "James Peterson",
    role: "CEO, Startup Ventures",
    content:
      "As a small business, we thought enterprise-grade security was out of reach. CyberSapiens made it affordable and manageable for our team.",
    rating: 4,
    avatar: Portrait5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-100 via-white to-teal-100"
      id="testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-2 sm:mb-3 lg:mb-4"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full">
              Client Success Stories
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from organizations we've
            protected
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
          {/* Testimonial Cards */}
          <div className="relative h-[200px] sm:h-[260px] md:h-[320px] lg:h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute inset-0 bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col ${
                  index === currentIndex ? "z-10" : "z-0"
                }`}
              >
                <div className="flex items-center mb-3 sm:mb-4 md:mb-5">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-cyan-100 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 md:-bottom-2 md:-right-2 bg-cyan-500 text-white rounded-full p-0.5 sm:p-1 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-2 sm:ml-3 md:ml-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex-1">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-cyan-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-10 bg-white p-1.5 sm:p-2 md:p-2.5 rounded-full shadow-sm sm:shadow-md hover:bg-gray-50 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-10 bg-white p-1.5 sm:p-2 md:p-2.5 rounded-full shadow-sm sm:shadow-md hover:bg-gray-50 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1.5 sm:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-cyan-600 sm:w-4 md:w-5"
                    : "bg-gray-300"
                }`}
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
          className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-2"
        >
          {[
            { name: "ISO 27001 Certified", icon: "🔒" },
            { name: "500+ Clients", icon: "😊" },
            { name: "4.9/5 Rating", icon: "⭐" },
            { name: "24/7 Support", icon: "🛡️" },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="flex items-center bg-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full shadow-xs sm:shadow-sm hover:shadow-md transition-all text-xs sm:text-sm md:text-base"
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl mr-1 sm:mr-1.5 md:mr-2">
                {badge.icon}
              </span>
              <span className="font-medium text-gray-800 whitespace-nowrap">
                {badge.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
