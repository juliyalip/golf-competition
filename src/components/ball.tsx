"use client"
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function Ball() {
    const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0,1], [0, -1500])
  const x = useTransform(scrollYProgress, [0,1], [0, -1500])
  const scale = useTransform(scrollYProgress, [0,1],[0.5, 3])

  const smoothY = useSpring(y, {stiffness: 80, damping: 20})
  const smoothX = useSpring(x, {stiffness: 80, damping: 20})
  const smoothScale = useSpring(scale, {stiffness: 80, damping: 20})
    return (
      
        <motion.div ref={ref}
           style={{x: smoothX, y: smoothY, scale: smoothScale}}
           transition={{duration: 5, ease: [0.4, 0, 0.2, 1]}}
            className='absolute bottom-10 left-100 
            transform -translate-x-1/2 z-10 w-100 h-100 mx-auto'>

            <img src='/images/ball.webp' srcSet="/images/ball.webp 1x, /images/ball_2x.png 2x, /images/ball_3x.png 3x" alt="ball" width={80} height={80} className='w-full h-full' />
        </motion.div>
     
    )
}
