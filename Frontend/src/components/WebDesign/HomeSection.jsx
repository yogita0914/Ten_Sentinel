import React from "react";
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";
import { Button } from "./Button";
import HomeSVG from "../../assets/WebDesignPage/home.svg";

export const HomeSection = () => (
  <section className="flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40">
    <SectionTitle title={"Looking for Top-Tier Web Design Services?"} />
    <LightParagraph>
      Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business. In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world. At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
    </LightParagraph>
    <p className="text-lg md:text-xl">
      We deliver customized web design solutions tailored to your brand, ensuring a seamless user experience that stands out from the competition.
    </p>
    <img src={HomeSVG} className="w-52 self-center md:w-80" />
    <a href="#contact" className="flex justify-center">
      <Button text={"Get FREE Assessment Report!"} />
    </a>
  </section>
);