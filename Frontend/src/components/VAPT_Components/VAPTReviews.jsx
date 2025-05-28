// src/components/VAPT/VAPTReviews.js
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { SectionTitle } from './SectionTitle'; // Assuming SectionTitle is in the same VAPT directory
import { vaptContent } from './VAPTData';

export const VAPTReviews = () => {
  const { reviews } = vaptContent;

  return (
    <section className="flex flex-col gap-4 md:gap-8">
      <SectionTitle title={"Our Reviews"} />

      <ul className="flex flex-col gap-4 md:gap-8 lg:items-center xl:flex-row">
        {reviews.map((review, key) => (
          <li
            key={key}
            className="flex flex-row px-2 py-4 gap-2 rounded-md border border-gray-300 md:gap-6 lg:max-w-[800px] shadow-md xl:flex-col xl:px-6"
          >
            <div
              className="min-w-32 bg-cover bg-center rounded-md md:min-w-44 xl:w-20 xl:h-40 xl:self-center"
              style={{ backgroundImage: `url(${review.img})` }}
            ></div>

            <div className="flex flex-col gap-2 xl:pr-4 overflow-hidden break-words">
              <ul>
                <li className="text-yellow-300 flex flex-wrap gap sm:gap-1 text-xl md:text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </li>
              </ul>

              <h3 className="text-base font-semibold md:text-lg">
                {review.name}
              </h3>
              <h4 className="text-xs font-light md:text-base ">
                {review.title}
              </h4>

              <p className="text-xs md:text-base">{review.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};