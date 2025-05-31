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
      "Before joining CyberSapiens, I had theoretical knowledge but lacked confidence applying it. The Red-Team internship changed that completely. I was exposed to real-world attack scenarios where I had to think critically and work under pressure. The mentors didn’t just give answers—they challenged me to find my own. Weekly reviews kept me focused, and the simulation-based learning made everything click. By the second month, I was already leading tasks and contributing to actual project workflows. I’ve grown into someone who can now audit, exploit, and report in a structured way. This was the most transformative experience of my career so far.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    content:
      "I’ve taken online courses and even had a couple of certificates, but nothing compares to CyberSapiens’ internship. It pushed me in ways no class ever has. We didn’t just learn how tools work—we built our own scripts, tackled live scenarios, and learned how to document every step clearly. The Android pentesting module especially stood out to me. By the end of the internship, I had contributed to real vulnerability reports. I finally understood how to convert findings into actionable recommendations. That’s what clients and companies care about. CyberSapiens helped me shift from being just a learner to being a contributor.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "David Rodriguez",
    content:
      "As someone from a non-technical background, I was nervous joining this program. But from the first week, the CyberSapiens team made it approachable. I learned how to scan, exploit, and document like a professional. Their live sessions were practical and full of insights you just won’t find on YouTube or Udemy. What impressed me most was the mentorship—I could ask anything without hesitation. They even helped me prepare for my first job interview with a security company. I now have a solid portfolio of work, a clear methodology, and most importantly, the confidence to continue learning on my own.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Emily Wilson",
    content:
      "This internship was nothing short of amazing. I always wanted to understand how real hackers think, and CyberSapiens gave me exactly that insight. Every week we had practical challenges focused on specific attack vectors—SQLi, XSS, SSRF, IDOR, you name it. The best part was the reporting. It wasn’t enough to just find a bug—we had to document it professionally, which is what most courses don’t teach. That alone gave me a major edge during job applications. Now, I approach every test methodically and can clearly explain the impact of any vulnerability I find. That’s a powerful skill to have.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "James Peterson",
    content:
      "CyberSapiens gave me my first taste of what it means to be in a real red-team operation. From OSINT gathering to post-exploitation and lateral movement, everything was structured yet hands-on. It wasn’t just about running Nmap or Burp Suite—it was about interpreting the results and using that to plan the next move. I also learned how to communicate findings in a way that executives can understand. That was huge for me, as I used to struggle explaining technical risks in layman’s terms. Today, I’m part of a blue team in a financial firm, and I owe that leap to this internship.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 6,
    name: "Michael Chen",
    content:
      "My second internship with CyberSapiens allowed me to take on a leadership role, which was a whole new level. I helped guide juniors while working on more advanced topics like privilege escalation chains and custom payloads. We even simulated a full attack chain from phishing to data exfiltration. It felt real. I also collaborated on writing an internal knowledge base that is now used by other interns. That made me realize how far I’ve come—from beginner to mentor. This place doesn’t just teach you—it shapes you into someone who can think, execute, and lead in cybersecurity environments.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 7,
    name: "Michael Chen",
    content:
      "I focused a lot on automation this time—building scripts that could handle recon, fingerprinting, and even some basic exploit chains. The team was extremely supportive and encouraged experimentation. I learned how to optimize processes, reduce false positives, and focus only on what matters. These are the kind of soft-skills that make a difference in high-pressure pentest projects. I also started documenting my work more thoroughly and presenting findings to a mock client panel. That experience was golden. I now have better scripting skills and more awareness about report impact, and that makes me a more efficient and reliable consultant.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 8,
    name: "Michael Chen",
    content:
      "Each time I come back to CyberSapiens, I grow a little more. In this round, I explored cloud security and container vulnerabilities—topics I had zero exposure to before. I even led a small task force that simulated lateral movement within a Kubernetes cluster. That was intense, but deeply rewarding. The mentorship and peer review process kept me on my toes and helped me develop a strong eye for detail. We were constantly encouraged to explain our logic and defend our methodologies. That habit alone changed how I now approach every new vulnerability, every tool, and every assessment.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 9,
    name: "Michael Chen",
    content:
      "This internship wasn’t just technical—it was strategic. I learned how to plan full assessments, allocate time, and prepare deliverables that map to compliance goals. We also explored risk-based reporting, which helped me distinguish between high-impact findings and noise. I wrote playbooks, helped build internal tools, and even contributed to drafting scope documents. That kind of exposure is rare for interns. The best part? I now have a portfolio I can showcase to recruiters with pride. CyberSapiens didn’t just make me a better hacker—it made me a better consultant, with a clear understanding of how security fits in the bigger picture.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 10,
    name: "Michael Chen",
    content:
      "One of my proudest moments was leading a red-team simulation from end to end—everything from phishing email crafting to establishing a C2 channel and capturing internal assets. Presenting that to a review panel taught me the importance of both technical depth and business alignment. The feedback I received improved how I write executive summaries and structure my remediation advice. I now understand the value of concise communication as much as technical detail. I’ve also grown to be more resourceful, routinely trying new techniques and tools on my own time. CyberSapiens gave me the mindset of a lifelong learner.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 11,
    name: "Michael Chen",
    content:
      "Every time I return to CyberSapiens, I find something new to learn. This time, I worked on creating threat models for new environments. That exercise gave me clarity on how adversaries might move, and how defenders can contain them. We simulated multi-stage attacks and even reviewed our own logs to understand what telemetry is useful during an incident. I also trained others on API testing and taught a workshop internally. It felt amazing to give back. CyberSapiens isn’t just an internship; it’s a professional playground where you grow, teach, and learn from a community of passionate defenders and breakers.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
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

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            >
              <ChevronLeftIcon className="h-6 w-6 text-cyan-700" />
            </button>
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((t, index) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial by ${t.name}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    setExpanded(false); // reset on dot click too
                  }}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-cyan-600"
                      : "bg-cyan-300 hover:bg-cyan-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            >
              <ChevronRightIcon className="h-6 w-6 text-cyan-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
