import React from 'react';
import { motion } from 'framer-motion';
// import { GraduationCap } from 'lucide-react';
import logo from '../assets/logo.svg';


const Footer = () => {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center">
              <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
              <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                TEN Sentinel
              </span>
            </div>
            <p className="mt-4 text-gray-400">Connecting talented students with amazing opportunities.</p>
          </motion.div>
          {[
            {
              title: "For Students",
              links: ["Browse Internships", "Career Resources", "Success Stories"]
            },
            {
              title: "For Companies",
              links: ["Post Internships", "Employer Resources", "Pricing"]
            },
            {
              title: "Connect",
              links: ["About Us", "Contact", "Blog"]
            }
          ].map((section, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    className="transition-colors duration-200"
                  >
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 TEN Sentinel. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;