import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Globe, TrendingUp, UsersRound, User } from 'lucide-react';

const stats = [
  { id: 1, name: 'User Trained', value: 1000000, suffix: '+', icon: Globe, color: 'bg-cyan-500' },
  { id: 2, name: 'Clients Served', value: 500, suffix: '+', icon: User, color: 'bg-blue-500' },
  { id: 3, name: 'Up-time', value: 99.75, suffix: '%', icon: TrendingUp, color: 'bg-purple-500' },
  { id: 4, name: 'Team Experts', value: 40, suffix: '+', icon: UsersRound, color: 'bg-indigo-500' },
];

const StatItem = ({ stat, startCount }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all"
    >
      <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
        <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
          {startCount && (
            <CountUp
              start={0}
              end={stat.value}
              duration={2.5}
              decimals={stat.id === 3 ? 2 : 0}
              suffix={stat.suffix}
            />
          )}
        </div>
        <h3 className="text-base sm:text-lg font-medium text-gray-600">{stat.name}</h3>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const [startCount, setStartCount] = useState(false);
  const [threatsCounted, setThreatsCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!threatsCounted) {
        setThreatsCounted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threatsCounted]);

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Floating animated elements - reduced on mobile */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 opacity-10 hidden sm:block"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3B82F6"
            d="M45.2,-58.3C58.1,-46.3,67.5,-30.9,70.2,-14.3C72.9,2.3,68.9,20.1,57.3,33.1C45.7,46.1,26.5,54.3,6.5,51.9C-13.5,49.5,-34.3,36.5,-47.4,19.9C-60.5,3.3,-65.9,-16.9,-57.9,-31.7C-49.9,-46.5,-28.5,-55.9,-8.1,-51.5C12.3,-47.1,24.6,-28.9,45.2,-58.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 opacity-10 hidden sm:block"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#22D3EE"
            d="M49.1,-55.6C62.1,-44.2,70.1,-26.9,72.5,-8.2C74.9,10.5,71.7,30.6,60.1,45.2C48.5,59.8,28.5,68.9,7.3,65.3C-13.9,61.7,-35.3,45.4,-48.5,27.8C-61.7,10.2,-66.7,-8.8,-60.2,-25.9C-53.7,-43.1,-35.7,-58.4,-17.3,-64.4C1,-70.4,19.7,-67.1,49.1,-55.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setStartCount(true)}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Solved about{' '}
            {threatsCounted ? (
              <CountUp
                start={0}
                end={5000}
                duration={2.5}
                suffix="+"
                className="inline-block"
              />
            ) : (
              '5000+'
            )}{' '}
            Cyber Threats!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} startCount={startCount} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;