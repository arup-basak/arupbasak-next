'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ProjectInterface from '@/interface/project.interface';
import { useRouter } from 'next/navigation';

interface Props {
  data: ProjectInterface;
}

const Project: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: .15 }}
      key={data.keyword}
      className='backdrop-blur-md backdrop-brightness-[1.20] hover:backdrop-brightness-[1.30] w-full my-3 p-7 cursor-pointer rounded-xl'
      style={{ cursor: 'pointer' }}
      onClick={() => {
        router.push(`projects/${data.keyword}`);
      }}
    >
      <div className='text-lg'>{data.name}</div>
      <div className='text-sm'>{data.desc}</div>
    </motion.div>
  );
};

export default Project;
