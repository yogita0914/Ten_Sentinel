import React from 'react';
import { motion } from 'framer-motion';
import TechBadge from './TechBadge';
import SectionHeader from './SectionHeader';
import { containerVariants, fadeUp } from './motion'; 

const techLogos = {
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  dotnet: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
};

const techStack = {
  frontend: [
    { name: 'React', logo: techLogos.react },
    { name: 'Next.js', logo: techLogos.nextjs },
    { name: 'Vue', logo: techLogos.vue },
    { name: 'Angular', logo: techLogos.angular }
  ],
  backend: [
    { name: 'Node.js', logo: techLogos.nodejs },
    { name: 'Python (Django)', logo: techLogos.django },
    { name: 'Python (Flask)', logo: techLogos.flask },
    { name: 'PHP (Laravel)', logo: techLogos.laravel },
    { name: '.NET', logo: techLogos.dotnet }
  ],
  mobile: [
    { name: 'Flutter', logo: techLogos.flutter },
    { name: 'React Native', logo: techLogos.react },
    { name: 'Swift', logo: techLogos.swift },
    { name: 'Kotlin', logo: techLogos.kotlin }
  ],
  databases: [
    { name: 'MongoDB', logo: techLogos.mongodb },
    { name: 'PostgreSQL', logo: techLogos.postgresql },
    { name: 'MySQL', logo: techLogos.mysql },
    { name: 'Firebase', logo: techLogos.firebase }
  ],
  devops: [
    { name: 'AWS', logo: techLogos.aws },
    { name: 'Docker', logo: techLogos.docker },
    { name: 'GitHub Actions', logo: techLogos.github },
    { name: 'Azure', logo: techLogos.azure }
  ]
};

const TechnologiesSection = () => (
  <section className="py-10 md:py-10 bg-gradient-to-tr from-teal-100 via-blue-50 to-cyan-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Technologies We Use"
        title="Modern Tech Stack"
        description="We leverage the latest technologies to build fast, secure, and scalable applications."
      />

      <motion.div
        className="max-w-5xl mx-auto space-y-8 md:space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {Object.entries(techStack).map(([category, items], index) => (
          <motion.div key={index} variants={fadeUp} className="mb-8 md:mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800 capitalize">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item, itemIndex) => (
                <TechBadge key={itemIndex} name={item.name} logo={item.logo} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechnologiesSection;