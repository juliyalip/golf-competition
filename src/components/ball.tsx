"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Ball() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div ref={ref} initial={isInView ? { y: -100, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }} className='w-20 h-20 mx-auto'>
            <Image src='/images/ball.webp' alt="ball" width={80} height={80} className='w-full h-full' />
        </motion.div>
    )
}
