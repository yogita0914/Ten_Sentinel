import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import DeliverSVG from "../../assets/WebDesignPage/deliver.svg";
import { deliverListItems } from "./WebDesignData";
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";
import PopupForm from "./PopupForm";

export const DeliverSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setName("");
    setEmail("");
    setPhone("");
    closeModal();
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.15 }
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="relative flex flex-col items-center bg-blue-50 gap-8 py-12 px-4 sm:px-6 md:gap-12 lg:px-24 xl:px-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <SectionTitle title="How We Deliver Exceptional Web Design" />

      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-screen-xl">
        {/* Content List */}
        <ul className="flex-1 flex flex-col gap-6">
          {deliverListItems.map((item, key) => (
            <motion.li
              key={key}
              className="flex flex-row gap-4 items-start"
              variants={listItemVariants}
            >
              <img
                className="w-12 h-12 md:w-14 md:h-14"
                src={item.icon}
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold md:text-lg lg:text-xl">
                  {item.title}
                </h3>
                <LightParagraph>{item.text}</LightParagraph>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Side Image */}
        <div className="hidden md:flex md:w-2/5 lg:w-1/3 justify-center">
          <img
            src={DeliverSVG}
            alt="Delivery process"
            className="w-full max-w-xs"
          />
        </div>
      </div>

      {/* CTA Button */}
      <Button
        onClick={openModal}
        text="Download Your FREE Web Design Sample Report"
      />

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="absolute inset-0 bg-black/10 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalBackdropVariants}
        >
          <PopupForm
            name={name}
            email={email}
            phone={phone}
            isFormValid={isFormValid}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
          />
        </motion.div>
      )}
    </motion.section>
  );
};
