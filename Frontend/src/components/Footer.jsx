import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';
import { FaFacebookF, FaXTwitter, FaLinkedin, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

const footerLinks = [
  {
    title: "SECURITY CONSULTATION",
    links: ["Security Audits", "Data Privacy"]
  },
  {
    title: "TRAININGS",
    links: ["Cyber Security Intern Trainee", "Cyber Security Courses for Working Professionals"]
  },
  {
    title: "IMPORTANT PAGES",
    links: ["About Us", "Contact Us", "Internships", "Privacy Policy"]
  }
];

const socialLinks = [
  { icon: <FaFacebookF />, name: "Facebook", href: "https://facebook.com/" },
  { icon: <FaXTwitter />, name: "Twitter", href: "https://twitter.com/" },
  { icon: <FaLinkedin />, name: "LinkedIn", href: "https://linkedin.com/" },
  { icon: <FaWhatsapp />, name: "WhatsApp", href: "https://whatsapp.com/" },
  { icon: <FaYoutube />, name: "YouTube", href: "https://youtube.com/" },
  { icon: <FaInstagram />, name: "Instagram", href: "https://instagram.com/" }
];

const Footer = () => {
  const [formData, setFormData] = React.useState({ fullName: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
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
          {/* Grid Layout */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:items-start text-left">
            {/* Logo Section */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src={logo} alt="TEN Sentinel logo" className="h-12 w-12" />
                  <span className="text-xl font-bold text-blue-600">TEN Sentinel</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                  <FiMapPin className="text-blue-500" />
                  <span>Noida, Uttar Pradesh</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <h3 className="text-base font-semibold mb-3 text-gray-900">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <motion.li
                      key={j}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="transition-transform duration-200"
                    >
                      <a href="#" className="text-gray-600 hover:text-blue-600 text-sm leading-snug">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter Signup */}
            <motion.div variants={fadeInUp} className="flex flex-col items-start w-full">
              <div className="space-y-4 w-full">
                <h3 className="text-base font-semibold text-gray-900">
                  Sign Up for Our Newsletter
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3 w-full">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-300 w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} TEN Sentinel. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 text-gray-500">
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
                  <div className="h-5 w-5">{social.icon}</div>
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