'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CandyInput: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border-2 border-purple-500 rounded-md p-3 pl-10 text-lg w-64"
        placeholder="Enter candy name"
      />
      <motion.div
        className="absolute top-2 left-2 bg-purple-500 rounded-full h-6 w-6 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: value ? 1 : 0 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M6.293 13.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default CandyInput;
