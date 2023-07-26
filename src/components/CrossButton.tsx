'use client'

import React from 'react'
import { XCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
    onClick: () => void
}

const CrossButton = (props: Props) => {
    return (
        <motion.div
            className='w-fit p-2 rounded-full cursor-pointer'
            onClick={props.onClick}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}>
            <XCircle size={36} color="#4f46e5" />
        </motion.div>
    )
}

export default CrossButton