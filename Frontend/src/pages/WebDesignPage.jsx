import React, { useState } from "react";
import DeliverSVG from "../assets/WebDesignPage/deliver.svg";
import HomeSVG from "../assets/WebDesignPage/home.svg";
import ServicesSVG from "../assets/WebDesignPage/services.svg";
import { SectionTitle } from "../components/WebDesign/SectionTitle";
import { LightParagraph } from "../components/WebDesign/LightParagraph";
import { Button } from "../components/WebDesign/Button";
import { IoClose } from "react-icons/io5";
import { ChevronDown, ChevronUp, Monitor, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WebDesignPage = () => {
  const importanceListItems = [
    {
      icon: "./importanceIcons/crown.png",
      title: "Strong First Impressions",
      text: "Your website is often the first interaction customers have with your brand. A polished, modern design builds immediate credibility.",
    },
    {
      icon: "./importanceIcons/rocket.png",
      title: "Enhanced User Experience",
      text: "Intuitive navigation and responsive layouts keep visitors engaged and reduce bounce rates.",
    },
    {
      icon: "./importanceIcons/phone.png",
      title: "Mobile Optimization",
      text: "Ensures your site looks and functions perfectly on all devices, reaching a wider audience.",
    },
    {
      icon: "./importanceIcons/bolt.png",
      title: "Faster Loading Speeds",
      text: "Optimized design improves performance, keeping users happy and boosting SEO rankings.",
    },
    {
      icon: "./importanceIcons/trophy.png",
      title: "Competitive Edge",
      text: "Stand out from competitors with a unique, visually appealing, and functional website.",
    },
    {
      icon: "./importanceIcons/search.png",
      title: "SEO-Friendly Structure",
      text: "Clean code + SEO-optimized architecture to rank higher and attract organic traffic.",
    },
  ];

  const deliverListItems = [
    {
      icon: "/deliverListItems/analysis.svg",
      title: "STEP 1: Discovery & Strategy",
      text: "Understand your brand, goals, and audience to craft a tailored design roadmap.",
    },
    {
      icon: "/deliverListItems/pencil.svg",
      title: "STEP 2: Wireframing & UX Planning",
      text: "Map intuitive user journeys and structure with low-fidelity wireframes.",
    },
    {
      icon: "/deliverListItems/pallete.svg",
      title: "STEP 3: Visual Design & Branding",
      text: "Create stunning, on-brand interfaces that captivate users (mobile-first!).",
    },
    {
      icon: "/deliverListItems/code.svg",
      title: "STEP 4: Development & Testing",
      text: "Transform designs into fast, responsive code—tested across devices/browsers.",
    },
    {
      icon: "/deliverListItems/rocket.svg",
      title: "STEP 5: Launch & Optimization",
      text: "Deploy with SEO best practices, analytics, and performance tuning.",
    },
    {
      icon: "/deliverListItems/sync.svg",
      title: "STEP 6: Post-Launch Support",
      text: "Continuous updates, A/B testing, and scalability enhancements.",
    },
  ];

  const [faqs, setFaqs] = useState([
    {
      question: "Why is professional web design critical for my business?",
      response:
        "Your website is your digital storefront. A well-designed site builds trust, improves user experience, and directly impacts conversions. Poor design can drive potential customers away.",
      isOpen: false,
    },
    {
      question: "How long does the web design process take?",
      response:
        "Typically 2-6 weeks, depending on complexity. We prioritize quality while meeting your deadlines.",
      isOpen: false,
    },
    {
      question: "Do you design mobile-friendly websites?",
      response:
        "Absolutely. Every site we build is fully responsive, ensuring seamless performance on all devices (60%+ traffic comes from mobile!).",
      isOpen: false,
    },
    {
      question: "Will my website be optimized for search engines (SEO)?",
      response:
        "Yes. Our designs include SEO best practices (clean code, speed optimization, and metadata structuring) to help you rank higher.",
      isOpen: false,
    },
    {
      question: "What ongoing support do you offer after launch?",
      response:
        "We provide post-launch updates, security patches, and performance tweaks to keep your site ahead of competitors.",
      isOpen: false,
    },
  ]);

  const handleSetFaqs = (e, key) => {
    e.preventDefault();
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, index) =>
        index === key ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {isPopUpOpen && (
        <div className="min-h-screen bg-black/50 fixed w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center bg-blue-100 p-6 mx-4 gap-10 rounded-sm shadow-md shadow-indigo-100">
            <div className="flex flex-row justify-between text-lg font-semibold gap-2">
              <h2>Get your Free Web Design Sample Report</h2>

              <IoClose
                onClick={() => setIsPopUpOpen(false)}
                className="text-2xl"
              />
            </div>

            <form className="flex flex-col gap-10 w-full">
              <div className="flex flex-col gap-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b border-gray-600 px-2 outline-0"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b border-gray-600 px-2 outline-0"
                />
              </div>

              <Button text={"Download it Now!"} />
            </form>
          </div>
        </div>
      )}
      <header
        className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
        style={{ backgroundImage: `url(https://promwad.com/sites/default/files/web-development_0.jpg)` }}
      >
        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-green-900 to-indigo-900"
        ></motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Monitor className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Web Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
          >
            Crafting visually stunning and user-friendly digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-lg font-medium px-5 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-2px] transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Optional bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header> 
      <div>
        {/* Home Page */}
        <section className="flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40">
          <SectionTitle title={"Looking for Top-Tier Web Design Services?"} />

          <LightParagraph>
            Web Design Services are essential for creating a powerful, visually
            appealing, and functional online presence for your business. In
            simple terms, it's like having a skilled team that crafts an
            engaging, user-friendly website tailored to your brand—helping you
            attract customers and stand out in the digital world. At its core,
            professional web design is your gateway to a strong online identity,
            ensuring your business not only looks great but also delivers a
            seamless experience that builds trust and drives growth.
          </LightParagraph>

          <p className="text-lg md:text-xl">
            We deliver customized web design solutions tailored to your brand,
            ensuring a seamless user experience that stands out from the
            competition.
          </p>

          <img src={HomeSVG} className="w-52 self-center md:w-80" />

          <a href="#contact" className="flex justify-center">
            <Button
            text={"Get FREE Assessment Report!"}
          />
          </a>
        </section>

        {/* Services */}
        <section className="flex flex-col bg-blue-50 gap-4 py-12 px-6 md:gap-8 lg:px-40">
          <SectionTitle title={"What Are Web Design Services?"} />

          <div className="flex flex-col gap-8 md:flex-row md:gap-10">
            <LightParagraph>
              Web Design Services are essential for creating a powerful,
              visually appealing, and functional online presence for your
              business. In simple terms, it's like having a skilled team that
              crafts an engaging, user-friendly website tailored to your
              brand—helping you attract customers and stand out in the digital
              world. At its core, professional web design is your gateway to a
              strong online identity, ensuring your business not only looks
              great but also delivers a seamless experience that builds trust
              and drives growth.
            </LightParagraph>

            <img
              src={ServicesSVG}
              className="w-full max-w-96 self-center md:w-2/5 lg:max-w-full"
            />
          </div>
        </section>

        {/* Importance */}
        <section className="flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40">
          <SectionTitle title={"Why is Web Design Important?"} />

          <LightParagraph>
            A high-quality website is crucial for your business's success in the
            digital world. Here are some key benefits of investing in
            professional web design services.
          </LightParagraph>

          <ul className="flex flex-col gap-6 md:grid grid-cols-2 lg:gap-12 xl:grid-cols-3">
            {importanceListItems.map((item, key) => (
              <li
                key={key}
                className="flex flex-col items-center justify-center border border-black rounded-md gap-2 px-6 py-2"
              >
                <img src={item.icon} className="w-14" />
                <h3 className="text-xl">{item.title}</h3>
                <LightParagraph>{item.text}</LightParagraph>
              </li>
            ))}
          </ul>
        </section>

        {/* Deliver */}
        <section className="flex flex-col bg-blue-50 gap-8 py-12 px-6 md:gap-12 lg:px-40 lg:items-center">
          <SectionTitle title={"How We Deliver Exceptional Web Design"} />

          <div className="flex flex-col md:flex-row md:gap-6 lg:justify-center">
            <ul className="flex flex-col gap-6">
              {deliverListItems.map((item, key) => (
                <li key={key} className="flex flex-row gap-4 items-center">
                  <img className="w-14 h-14" src={item.icon} />

                  <div className="flex flex-col md:gap-1">
                    <h3 className="text-lg font-semibold md:text-xl">
                      {item.title}
                    </h3>
                    <LightParagraph>{item.text}</LightParagraph>
                  </div>
                </li>
              ))}
            </ul>

            <img className="hidden md:block w-2/6" src={DeliverSVG} />
          </div>

          <Button
            onClick={() => setIsPopUpOpen(true)}
            text={"Download Your FREE Web Design Sample Report"}
          />
        </section>
{/* form */}
        <section className="py-16 px-6 relative overflow-hidden" id="contact">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white-600 to-white-700 opacity-90 -z-10"></div>

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <motion.div>
                <img className="w-200 h-150" src="https://img.freepik.com/premium-photo/logo-web-design-is-shown-white-background_939033-77071.jpg?ga=GA1.1.1858429720.1745583539&semt=ais_hybrid&w=740"/>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <h3 className="text-2xl text-center font-bold text-gray-900 mb-6">
                    Get Started Today
                  </h3>

                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name:
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Tell us about your security needs"
                      ></textarea>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-40 text-sm md:text-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
                      >
                        Submit Form
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* FAQ's */}
        <section className="flex flex-col gap-6 py-12 px-6 lg:justify-self-center items-center">
          <SectionTitle title={"FAQ's"} />

          <ul className="flex flex-col gap-8 w-full">
            {faqs.map((faq, key) => (
              <li
                key={key}
                className="flex flex-col gap-2 bg-gray-100 rounded-lg shadow-xl lg:w-[800px]"
              >
                <div className="flex flex-row items-center justify-between gap-4 text-base md:text-xl px-4 py-2 md:px-8 md:py-6 ">
                  <h3>{faq.question}</h3>

                  <button
                    className="w-6 cursor-pointer"
                    onClick={(e) => handleSetFaqs(e, key)}
                  >
                    {faq.isOpen ? (
                      <ChevronUp size={28} />
                    ) : (
                      <ChevronDown size={28} />
                    )}
                  </button>
                </div>

                {faq.isOpen && (
                  <p className="text-sm text-gray-800 bg-gray-50 rounded-b-lg md:text-lg w-full px-4 py-2 md:px-8 md:py-6 ">
                    {faq.response}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
