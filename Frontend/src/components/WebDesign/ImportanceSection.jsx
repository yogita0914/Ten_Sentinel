import React from "react";
import { SectionTitle } from "./SectionTitle";
import { LightParagraph } from "./LightParagraph";
import { importanceListItems } from "./WebDesignData";

export const ImportanceSection = () => (
  <section className="flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40">
    <SectionTitle title={"Why is Web Design Important?"} />
    <LightParagraph>
      A high-quality website is crucial for your business's success...
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
);