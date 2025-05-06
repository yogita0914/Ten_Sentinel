import React from "react";
import { motion } from "framer-motion";
import Faq from "../components/cloud-security/Faq";
import {
  hero,
  intro,
  whatIsCloudSecurity,
  keyFocusAreas,
  cloudServices,
  benefits,
} from "../assets/data/cloudSecurity"; // adjust path

const CloudSecurity = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <header
        className="relative text-white text-center py-15 mt-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold">{hero.title}</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">{hero.subtitle}</p>
        </div>
      </header>

      {/* Intro */}
      <div className="flex gap-20 justify-center mt-20 px-10">
        <motion.div>
          <div className="shadow-lg">
            <img className="w-90 h-90" src={intro.image} />
          </div>
        </motion.div>
        <motion.div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">{intro.title}</h1>
            <p className="w-200 mt-5 leading-8">{intro.text}</p>
          </div>
        </motion.div>
      </div>

      {/* What is Cloud Security */}
      <div className="bg-green-100 flex justify-center py-10 mt-10">
        <motion.div className="text-center max-w-5xl">
          <h1 className="text-5xl">{whatIsCloudSecurity.title}</h1>
          <p className="px-10 mt-5">{whatIsCloudSecurity.description}</p>
        </motion.div>
      </div>

      {/* Key Areas */}
      <div>
        <h1 className="text-center mt-10 text-5xl">Key Areas We Focus On:</h1>
      </div>
      <div className="flex justify-evenly mt-20 px-10">
        <motion.div className="flex flex-col gap-4">
          {keyFocusAreas.map((area, idx) => (
            <div key={idx}>
              <h1 className="text-2xl">{area.title}</h1>
              <p className="text-gray-500">{area.description}</p>
            </div>
          ))}
        </motion.div>
        <motion.div>
          <img
            className="w-150 h-100 rounded-lg shadow-lg"
            src="https://img.freepik.com/free-vector/flat-computer-logo-template_23-2149008087.jpg?ga=GA1.1.1858429720.1745583539&semt=ais_hybrid&w=740"
          />
        </motion.div>
      </div>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div className="grid md:grid-cols-3 gap-8">
          {cloudServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <div className="text-center pb-16">
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300"
        >
          Secure Your Cloud Now
        </a>
      </div>

      {/* Why TEN */}
      <div>
        <h1 className="text-center text-5xl">
          Why Choose TEN for Your Cloud Security Needs?
        </h1>
        <motion.div className="flex justify-evenly gap-10 p-20 flex-wrap">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} p-6 rounded-xl shadow-lg cursor-pointer max-w-sm`}
            >
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* FAQ */}
      <Faq />
    </div>
  );
};

export default CloudSecurity;
