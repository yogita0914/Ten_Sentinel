import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    content:
      "Joining CyberSapiens transformed the way I view cybersecurity. The Red-Team internship gave me hands-on exposure to real-world scenarios. I learned how to perform detailed assessments, exploit vulnerabilities, and write impactful reports. Weekly simulation challenges kept me engaged and constantly improving. This internship gave me the confidence to pursue a professional role in security.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    content:
      "CyberSapiens offered the most intense learning environment I’ve ever been part of. From Android pentesting to web app attacks, every module was practical and report-driven. I gained a deep understanding of how to communicate technical findings clearly. By the end, I had real reports and scripts to showcase. This shifted my mindset from student to security contributor.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Nina Patel",
    content:
      "As someone without a CS degree, I feared I wouldn't keep up. But the team at CyberSapiens made learning accessible and exciting. The mentorship was phenomenal—I could ask anything, anytime. I learned methodology, documentation, and even how to prep for interviews. I now feel ready to apply for roles I once thought were out of reach.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 4,
    name: "David Rodriguez",
    content:
      "The internship helped me go beyond just knowing tools—it made me understand how to use them strategically. Every attack vector we explored was followed by real-time reporting and peer review. This helped me sharpen both my technical and communication skills. Now, I can break down a vulnerability for both devs and execs alike.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 5,
    name: "Emily Wilson",
    content:
      "Every week brought something new—SQLi, SSRF, IDOR, you name it. We weren’t just solving CTFs; we were running simulated audits and delivering structured reports. This internship taught me to think like both an attacker and a consultant. I’ve walked away with skills, confidence, and a job offer in security consulting.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 6,
    name: "James Peterson",
    content:
      "CyberSapiens taught me more in three months than years of self-study did. I led attack chains, wrote findings, and learned how to explain risk to executives. It wasn’t just technical—it was strategic. I now know how to prioritize impact, focus on business value, and communicate effectively. That’s what got me into a blue team role.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 7,
    name: "Priya Mehta",
    content:
      "Automation was my focus—I built scripts for recon, scanning, and reporting. The team supported every experiment, and I grew faster than I imagined. I also presented to mock client panels, learning to deliver professional summaries. My confidence and scripting abilities improved drastically. I now contribute to real-world assessments independently.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 8,
    name: "Ali Khan",
    content:
      "CyberSapiens introduced me to cloud and container security—topics I had never explored before. Leading a Kubernetes simulation was intense but incredibly rewarding. The habit of justifying every tool and action made me more thoughtful and precise. Today, I document everything clearly and plan assessments with confidence.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    id: 9,
    name: "Jessica Lee",
    content:
      "This internship made me realize security isn’t just about hacking—it’s about communication, structure, and business alignment. I wrote playbooks, helped draft scope docs, and worked on internal tooling. I’ve now built a portfolio that’s helped me land interviews and freelance gigs. CyberSapiens shaped me into a true security professional.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: 10,
    name: "Ravi Prakash",
    content:
      "Running a full red-team simulation was the highlight of my internship. From phishing to C2 setups and report writing, it was end-to-end and real. Presenting findings to a review panel taught me how to communicate impact, not just findings. This helped me get better at writing summaries and preparing for client meetings.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 11,
    name: "Laura Martins",
    content:
      "In my final round with CyberSapiens, I built threat models, conducted API tests, and even trained new interns. Teaching others was one of the best parts—it solidified my knowledge. I now see myself as part of a larger community of learners and mentors. This experience has set a strong foundation for my long-term goals.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
];

const Rating = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setExpanded(false); // reset expanded state on change
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setExpanded(false); // reset expanded state on change
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
  };

  const MAX_LENGTH = 150;
  const testimonial = testimonials[currentIndex];
  const isLong = testimonial.content.length > MAX_LENGTH;
  const displayText = expanded
    ? testimonial.content
    : testimonial.content.slice(0, MAX_LENGTH) + (isLong ? "..." : "");

  return (
    <section
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50"
      id="testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            See What our Students Say About Us!
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
          {/* Testimonial Cards */}
          <div className="relative overflow-visible transition-all duration-300">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col h-full"
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
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex-1">
                  &quot;{displayText}&quot;
                  {isLong && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="ml-2  text-cyan-600 font-semibold hover:underline focus:outline-none "
                    >
                      {expanded ? "Read less" : "Read more"}
                    </button>
                  )}
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
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            style={{ top: "45%" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-10 bg-white p-1.5 sm:p-2 md:p-2.5 rounded-full shadow-sm sm:shadow-md hover:bg-gray-50 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
          </motion.button>

          <motion.button
            style={{ top: "45%" }}
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
      </div>
    </section>
  );
};

export default Rating;
