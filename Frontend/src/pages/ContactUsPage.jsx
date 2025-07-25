import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  PaperAirplaneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import ContactBanner from "../assets/ContactUSPage/ContactBanner.avif";
import Support from "../assets/ContactUSPage/Support.jpg";
import { Mail } from "lucide-react";
import HeroSection from "../components/cloud-security/HeroSection";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const location = {
    location: "Noida, UP, INDIA",
    address: "Corporate Address India Accelerator, Noida 201301, UP, India",
    email: "info@entrepreneurshipnetwork.net",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.024327883314!2d77.3609115!3d28.5671201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffb297c4079%3A0x89a0f65267a8b4e2!2sIndia%20Accelerator!5e0!3m2!1sen!2sin!4v1680876567890!5m2!1sen!2sin",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Banner Section */}
      <HeroSection
        subtitle="Reach out to us for any queries or support"
        title="Contact Us"
        backgroundImage={ContactBanner}
        Icon={Mail}
      />

      {/* Contact Section */}
      <div
        id="contact"
        className="flex justify-center items-stretch gap-8 px-8 py-12 flex-wrap"
      >
        {/* Left Image */}
        <div className="flex-1 min-w-[300px] max-w-[500px] hidden md:block">
          <motion.img
            src={Support}
            alt="Customer Support"
            className="w-full h-full rounded-xl object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#f8f8f8] p-8 rounded-xl shadow-md flex-1 min-w-[300px] max-w-[500px] relative overflow-hidden"
        >
          {/* Animated Blobs */}
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 -top-20 w-40 h-40 bg-cyan-400 rounded-full opacity-30"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-400 rounded-full opacity-30"
          />

          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center w-full mb-4"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full">
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium tracking-wider">
                  CONTACT US
                </span>
              </div>
            </motion.div>

            <p className="text-lg text-center mb-6 text-gray-500 sm:text-xl">
              We’d love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-6">
                {/* Name */}
                <motion.div
                  animate={name ? { scale: 1.03 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base transition-all"
                  />
                  {name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  animate={email ? { scale: 1.03 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base transition-all"
                  />
                  {email && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  animate={message ? { scale: 1.03 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm sm:text-base resize-y"
                  />
                </motion.div>
              </div>

              {/* Submit Button */}

              <motion.button
                type="submit"
                disabled={!email || !name || !message}
                whileHover={{
                  scale: email && name && message ? 1.05 : 1,
                  boxShadow:
                    email && name && message
                      ? "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
                      : "none",
                }}
                whileTap={{
                  scale: email && name && message ? 0.95 : 1,
                }}
                className={`w-44 mx-auto block px-6 py-3 rounded-full font-semibold transition-all
                    ${
                      email && name && message
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                style={{ whiteSpace: "nowrap" }}
              >
                <div className="flex items-center justify-center gap-2">
                  Send Message
                  <PaperAirplaneIcon className="h-5 w-5" />
                </div>
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-600 font-semibold text-center mt-2"
                >
                  Submitted successfully!
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Location Info Section */}
      <div className="flex justify-center my-12">
        <div className="bg-gray-100 shadow-md rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center max-w-6xl w-full">
          {/* Location Details */}
          <div className="flex-1 text-gray-700 space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 mt-1 text-xl" />
              <div>
                <h3 className="text-xl font-semibold">{location.location}</h3>
                <p className="text-sm">{location.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-blue-600 mt-1 text-xl" />
              <p className="text-sm">{location.email}</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-[50%] h-[250px] rounded-xl overflow-hidden shadow-md">
            <iframe
              title={`Map of ${location.location}`}
              src={location.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
