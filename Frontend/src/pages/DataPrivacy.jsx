import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    num: "1",
    about: "Stay current with top-tier data privacy solutions and services.",
  },
  {
    num: "2",
    about:
      "Adapt and comply with regulations in an ever-changing legal environment.",
  },
  {
    num: "3",
    about:
      "Ensure an ongoing, efficient data protection and compliance approach, effectively reducing related expenses.",
  },
  {
    num: "4",
    about:
      "Shield your brand reputation by ensuring the protection of sensitive and regulated business and customer data.",
  },
];

const services = [
  {
    title: "Assessments",
    description:
      "Analyze the current risk posture against strategic goals and compliance expectations.",
    image: "https://cdn-icons-png.flaticon.com/512/7870/7870809.png",
    color: "bg-blue-100",
  },
  {
    title: "Design",
    description:
      "Design a customized privacy compliance strategy with you, ensuring it fulfills legal and regulatory obligations.",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-pencil-icon-download-in-svg-png-gif-file-formats--edit-write-drow-iconhub-pack-miscellaneous-icons-1093489.png?f=webp",
    color: "bg-green-100",
  },
  {
    title: "Methodology",
    description:
      "A clear, step-by-step approach to help manage data privacy effectively and meet compliance goals.",
    image:
      "https://cdn-icons-png.freepik.com/256/2643/2643513.png?semt=ais_hybrid",
    color: "bg-purple-100",
  },
  {
    title: "Surveillance",
    description:
      "Surveillance in data privacy involves monitoring systems to detect breaches and maintain compliance.",
    image: "https://cdn-icons-png.flaticon.com/512/4046/4046313.png",
    color: "bg-cyan-100",
  },
  {
    title: "Tasks",
    description:
      "Tasks refer to specific actions or duties that are performed to achieve a particular goal or outcome.",
    image: "https://cdn-icons-png.flaticon.com/512/4345/4345800.png",
    color: "bg-purple-100",
  },
  {
    title: "Execution",
    description:
      "Execution refers to the process of carrying out plans, strategies, or tasks to achieve specific goals or objectives.",
    image: "https://cdn-icons-png.flaticon.com/512/9503/9503512.png",
    color: "bg-green-100",
  },
];
const DataPrivacy = () => {
  return (
    <>
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2171306296/vector/futuristic-blue-gradient-mesh-background-for-presentations-posters-ads-banners-brochures.jpg?s=612x612&w=0&k=20&c=BBS2MfIpin_kwvMoNyMfZorBTfp9dHM1hSmwBKqEvNs=')",
        }}
      >
        <div className="bg-opacity-50 p-6 sm:p-8 rounded-xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Data Privacy
          </h1>
          <p className="text-base sm:text-sm md:text-xl max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            _______________________________________________
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1719037378470-415.png&w=3840&q=75"
            alt="Healthcare"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Data Protection and Privacy
          </h2>
          <p className="text-lg text-gray-600">
            Ten Sentinel’s data protection and privacy solutions empower
            organizations to stay ahead of emerging threats and evolving
            regulations. By delivering cutting-edge services in data security
            and privacy compliance, we help businesses build trust, ensure
            regulatory alignment, and safeguard sensitive information in an
            ever-changing digital landscape.
          </p>
        </div>
      </div>

      <div className="p-8 bg-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          The Value Our Consulting Brings to You
        </h1>
        <p className="text-lg text-gray-600  mx-auto">
          We offer end-to-end support — from strategic consulting to hands-on
          implementation — to help you overcome challenges and embrace growth.
          Our expertise ensures you stay compliant, secure, and future-ready.
        </p>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">
          Our Privacy team delivers tailored solutions that enable clients to:
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {solutions.map((item, id) => (
          <motion.div
            key={id}
            className="relative bg-white rounded-lg shadow-md p-6 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Card Content */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center relative z-10">
              <motion.span
                className="bg-blue-500 text-white px-3 py-1 rounded-full cursor-pointer"
                whileHover={{
                  scale: 1.2, 
                  backgroundColor: "#1D4ED0", 
                  color: "#fff",
                  transition: { duration: 0.5 }, 
                }}
              >
                {item.num}
              </motion.span>
            </h3>
            <p className="text-black text-center relative z-10">{item.about}</p>

            {/* Shine Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 to-blue-700 text-white opacity-0 group-hover:opacity-60 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                opacity: 0.5,
                backgroundPosition: "100% 0",
              }}
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "0 0",
              }}
            />
            {/* Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center p-4 sm:p-6">
        <h2 className="text-lg sm:text-md md:text-2xl font-semibold text-center text-gray-800 max-w-4xl">
          Ten Sentinel’s solutions empower organizations to mitigate data breach
          risks and ensure compliance, protecting them from costly fines and
          reputational harm.
        </h2>
      </div>

      <div className="p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black-400">
          Our Services
        </h1>
        <p className="text-center text-gray-700 mb-6 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto px-4">
          Explore our wide range of solutions and services designed to meet your
          needs.
        </p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((item, id) => (
            <motion.div
              key={id}
              className={`relative ${item.color} rounded-lg shadow-md p-4 flex overflow-hidden group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 w-full h-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] before:skew-x-[-20deg] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700 z-10 pointer-events-none" />

              {/* Image */}
              <div className="w-1/5 mr-4 z-20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="w-4/5 z-20">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default DataPrivacy;
