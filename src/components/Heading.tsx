'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Roboto_Slab } from 'next/font/google'

const roboto_slab = Roboto_Slab({ subsets: ['latin'], weight: ['800'] })

interface HeadingProps {
    text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
    return (
        <motion.div
            className={`mx-auto w-fit my-10 text-7xl font-bold text-center text-indigo-600 ${roboto_slab.className}`}
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            {text}
        </motion.div>
    );
};

export default Heading;
