import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import { MdEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";


const footerLinks = [
  {
    title: "SECURITY CONSULTATION",
    links: [
      { label: "Security Audits", url: "/security-audits" },
      { label: "Data Privacy", url: "/data-privacy" },
    ],
  },
  {
    title: "TRAININGS",
    links: [
      { label: "Cyber Security Intern Trainee", url: "/intern-trainee" },
      { label: "Cyber Security Courses for Working Professionals", url: "/cyber-working-professional" },
    ],
  },
  {
    title: "IMPORTANT PAGES",
    links: [
      { label: "About Us", url: "/" },
      { label: "Contact Us", url: "/" },
      {
        label: "Internship",
        url: "https://internships.entrepreneurshipnetwork.net/",
      },
      { label: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
];

const socialLinks = [
  { icon: <Mail />, name: "LinkedIn", href: "https://linkedin.com/" },
  { icon: <Linkedin />, name: "LinkedIn", href: "https://linkedin.com/" },
];

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Grid Layout - Centered on all screens */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {/* Logo Section - Always centered */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={logo}
                    alt="TEN Sentinel logo"
                    className="h-12 w-12"
                  />
                  <span className="text-xl font-bold text-blue-600">
                    TEN Sentinel
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <FiMapPin className="text-blue-500" />
                  <span>Noida 201301, UP, India</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <MdEmail className="text-blue-500" />
                  <a
                    href="mailto:info@entrepreneurshipnetwork.net"
                    className="hover:text-blue-600 break-words"
                  >
                    info@entrepreneurshipnetwork.net
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer Links - Centered in their columns */}
            {footerLinks.map((section, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <h3 className="text-base font-semibold mb-4 text-gray-900">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <motion.li
                      key={j}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="transition-transform duration-200"
                    >
                      <Link
                        to={link.url}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-gray-600 hover:text-blue-600 text-sm"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar - Centered with proper spacing */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-300 w-full flex flex-col sm:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="order-2 sm:order-1 text-center sm:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} TEN Sentinel. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2 font-semibold">
                Powered by the TEN Sentinel Team.
              </p>
            </div>

            <div className="order-1 sm:order-2 flex justify-center flex-wrap gap-4 text-gray-500">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <div className="text-xl">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;