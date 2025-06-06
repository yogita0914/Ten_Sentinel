// src/components/VAPT/VAPTAbout.js
import React from 'react';

export const VAPTAbout = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-12 xl:flex-row self-center">
      <img
        src="https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96426.jpg?t=st=1746717179~exp=1746720779~hmac=ec69305cae6b1d83cc8fbe5954009b397b8637ea89d3cf529e4e4d5496904ad9&w=996"
        className="sm:h-[400px] self-center"
        alt="About VAPT Services"
      />

      <div className="flex flex-col gap-4 text-base md:text-lg xl:max-w-[480px]">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
          About Our VAPT Services
        </h2>

        <p className="font-light">
          Vulnerability Assessment and Penetration Testing (VAPT) is a
          critical security process that uncovers weaknesses across your
          systems, applications, networks, and other digital assets. Our
          VAPT services not only identify existing vulnerabilities but also
          evaluate the potential impact of exploitation by malicious actors,
          helping you understand and manage your security risks more
          effectively.
        </p>

        <p>
          Unlike many providers, we go beyond simple detection and
          reporting. Our team works closely with you to support the full
          remediation process and conduct thorough re-validation, ensuring
          that identified vulnerabilities are properly resolved and your
          environment is secure.
        </p>
      </div>
    </section>
  );
};