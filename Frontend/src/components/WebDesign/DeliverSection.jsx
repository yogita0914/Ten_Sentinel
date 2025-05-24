import React from "react";
import { Button } from "./Button";
import DeliverSVG from "../../assets/WebDesignPage/deliver.svg";
import { deliverListItems } from "./WebDesignData";
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";

export const DeliverSection = ({ setIsPopUpOpen }) => (
  <section className="flex flex-col bg-blue-50 gap-8 py-12 px-6 md:gap-12 lg:px-40 lg:items-center">
    <SectionTitle title={"How We Deliver Exceptional Web Design"} />
    <div className="flex flex-col md:flex-row md:gap-6 lg:justify-center">
      <ul className="flex flex-col gap-6">
        {deliverListItems.map((item, key) => (
          <li key={key} className="flex flex-row gap-4 items-center">
            <img className="w-14 h-14" src={item.icon} />
            <div className="flex flex-col md:gap-1">
              <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>
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
);