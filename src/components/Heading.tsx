'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Roboto_Slab } from 'next/font/google'
import { Sparkles } from 'lucide-react'


const roboto_slab = Roboto_Slab({ subsets: ['latin'], weight: ['800'] })

interface HeadingProps {
    text: string;
}

const Sparkle = (props: { position: 'top' | 'bottom' }) => {
    return (
        <div className={`flex mx-2 w-fit ${props.position === 'top' ? 'items-start' : 'items-end'}`}>
            <motion.div
                className={`mx-2 w-fit h-fit`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Sparkles size={36} color={'#4f46e5'} strokeWidth={3} />
            </motion.div>
        </div>
    );
};


const Heading: React.FC<HeadingProps> = ({ text }) => {
    return (
        <div className='mx-auto w-fit my-10 text-center flex'>
            <Sparkle position='bottom' />
            <motion.div
                className={`text-7xl font-bold text-indigo-600 ${roboto_slab.className}`}
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
            <Sparkle position='top' />
        </div>

    );
};

export default Heading;
