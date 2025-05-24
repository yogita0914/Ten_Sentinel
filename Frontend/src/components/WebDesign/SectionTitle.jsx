import React from 'react';
import { motion } from 'framer-motion';

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const SectionTitle = ({ title }) => {
    return (
        <motion.h2
            className="text-2xl font-semibold md:text-3xl lg:text-4xl"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {title}
        </motion.h2>
    );
};
