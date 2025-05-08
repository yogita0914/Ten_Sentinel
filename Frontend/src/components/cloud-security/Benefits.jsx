import React from "react";
import { motion } from "framer-motion";
import { benefits } from "../../assets/data/cloudSecurity";
import { Award, Shield, Clock, Users, Zap, Lock } from "lucide-react";

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Updated: Now accepts 'title' as a parameter
  const getIcon = (title) => {
    if (title.includes("Certified")) return <Award className="w-6 h-6" />;
    if (title.includes("Protection")) return <Shield className="w-6 h-6" />;
    if (title.includes("Response")) return <Clock className="w-6 h-6" />;
    if (title.includes("Team")) return <Users className="w-6 h-6" />;
    if (title.includes("Performance")) return <Zap className="w-6 h-6" />;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose TEN for Your Cloud Security Needs?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver industry-leading cloud security solutions with proven results
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className={`${benefit.bg} rounded-2xl shadow-md p-8 transition-all duration-300 border border-gray-100 h-full flex flex-col`}
            >
              
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              
              <p className="text-sm md:text-lg text-gray-700 flex-grow">
                {benefit.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm text-gray-600">Enterprise-grade</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="text-sm md:text-lg inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-4 px-8 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
          >
            Schedule a Security Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
