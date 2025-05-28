import React from 'react';

export const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold text-center mb-4 md:text-3xl lg:text-4xl">
      {title}
    </h2>
  );
};