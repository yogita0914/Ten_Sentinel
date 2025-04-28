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
      className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5`}>
        <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
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
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10 max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setStartCount(true)}
          className="text-center mb-12 sm:mb-14"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} startCount={startCount} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;