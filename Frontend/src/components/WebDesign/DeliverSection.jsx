import React from "react";
import { Button } from "./Button";
import DeliverSVG from "../../assets/WebDesignPage/deliver.svg";
import { deliverListItems } from "./WebDesignData";
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";

export const DeliverSection = ({ setIsPopUpOpen }) => (
  <section className="flex flex-col items-center bg-blue-50 gap-8 py-12 px-4 sm:px-6 md:gap-12 lg:px-24 xl:px-40">
    <SectionTitle title="How We Deliver Exceptional Web Design" />

    <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-screen-xl">
      {/* Content List */}
      <ul className="flex-1 flex flex-col gap-6">
        {deliverListItems.map((item, key) => (
          <li key={key} className="flex flex-row gap-4 items-start">
            <img className="w-12 h-12 md:w-14 md:h-14" src={item.icon} alt="" />
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold md:text-lg lg:text-xl">
                {item.title}
              </h3>
              <LightParagraph>{item.text}</LightParagraph>
            </div>
          </li>
        ))}
      </ul>

      {/* Side Image */}
      <div className="hidden md:flex md:w-2/5 lg:w-1/3 justify-center">
        <img src={DeliverSVG} alt="Delivery process" className="w-full max-w-xs" />
      </div>
    </div>

    {/* CTA Button */}
    <Button
      onClick={() => setIsPopUpOpen(true)}
      text="Download Your FREE Web Design Sample Report"
    />
  </section>
);
