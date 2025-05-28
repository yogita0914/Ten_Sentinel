// src/components/VAPT/VAPTPlatforms.js
import React from 'react';
import { SectionTitle } from './SectionTitle'; // Assuming SectionTitle is in the same VAPT directory
import { vaptContent } from './VAPTData';

export const VAPTPlatforms = () => {
  const { platforms } = vaptContent;

  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title={"We perform VAPT on the below platforms"} />

      <ul className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 auto-rows-fr">
        {platforms.map((platform, key) => (
          <li
            key={key}
            className="h-full w-full flex flex-col gap-2 justify-center items-center bg-blue-50 p-4 rounded-md shadow-sm"
          >
            {React.cloneElement(platform.icon, {
              className: "w-12 h-12 text-blue-500 md:w-20 md:h-20",
            })}
            <h3 className="text-base font-semibold text-center md:text-lg">
              {platform.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};