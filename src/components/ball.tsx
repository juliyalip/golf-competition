"use client"
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { RefObject, useEffect, useState } from 'react'

interface BallProps{
  scrollTargetRef: RefObject<HTMLElement | null>
}

export default function Ball({scrollTargetRef}: BallProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(()=>{
    const getSize= () =>{ 
      setIsLargeScreen(window.innerWidth >=1024)
    };
    window.addEventListener("resize", getSize);
    getSize();

    return ()=> {
      window.removeEventListener('resize', getSize)
    }
  }, [])

  const initionX=isLargeScreen ? 0 : 100

  const {scrollYProgress} = useScroll({
    target: scrollTargetRef,
    offset: isLargeScreen ?["center end", "end start"] : ["center center", "end start"]
  })
  const y = useTransform(scrollYProgress, [0,1], [0, -1500])
  const x = useTransform(scrollYProgress, [0,1], [initionX, -1500])
  const scale = useTransform(scrollYProgress, [0,1],[0.5, 3])

  const smoothY = useSpring(y, {stiffness: 80, damping: 20})
  const smoothX = useSpring(x, {stiffness: 80, damping: 20})
  const smoothScale = useSpring(scale, {stiffness: 80, damping: 20})
    return (
        <motion.div
           style={{x: smoothX, y: smoothY, scale: smoothScale}}
           transition={{duration: 5, ease: [0.4, 0, 0.2, 1]}}
            className='absolute top-[10%] left-0 z-10 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] 
            md:left-[40%] md:top-[80%] md:w-[270px] md:h-[270px] mx-auto'>
            <img src='/images/ball.webp' srcSet="/images/ball.webp 1x, /images/ball_2x.png 2x, /images/ball_3x.png 3x" alt="ball" width={80} height={80} className='w-full h-full' />
        </motion.div>
    )
}


