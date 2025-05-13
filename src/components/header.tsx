"use client"
import Link from "next/link"
import { useState, useRef } from 'react'
import { useScroll, useMotionValueEvent, motion, easeOut } from "framer-motion"

export default function Header() {
    const { scrollY } = useScroll()
    const lastScroll = useRef(0)
    const [visible, setVisible] = useState(true)

    useMotionValueEvent(scrollY, 'change', (current) => {
        const scrollTop = current
        if (scrollTop < 50) {
            setVisible(true)
        } else if (scrollTop > lastScroll.current) {
            setVisible(false)
        } else {
            setVisible(true)
        }
        lastScroll.current = scrollTop
    })
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: visible ? 0 : -100 }} transition={{ duration: 0.3, ease: easeOut }} className="fixed top-0 left-0 w-full z-50 ">
            <div className=" container mx-auto flex justify-center mt-2 px-2">
                <div className="container mx-auto flex justify-center mt-5 px-4 ">
                    <div className="bg-gray-200/50 px-1 rounded-2xl flex items-center">
                        <img src='/premier.svg' alt='logo premier' className="w-[100px]  md:w-[150px] lg:w-[200px] " />
                    </div>
                    <div className="ml-auto flex align-middle bg-gray-200/50 rounded-2xl p-[4px]">
                        <Link href="#" className="hidden md:inline-block md:border-[1.5px] md:border-black-100 px-4 cursor-pointer
           py-2 rounded-[4px]  hover:bg-blue-700 hover:border-blue-700 mr-1
            hover:text-white transition-colors  duration-150 
        ease-in-out text-base lg:mr-2 lg:border-[1.5px] lg:rounded-xl" >Agenda</Link>
                        <div className="menu-link">


                            <Link href="#" className="transition-colors text-base duration-150 cursor-pointer
        ease-in-out text-[10px] border-2 border-indigo-600 bg-indigo-600 text-white rounded-[4px]
         inline-flex px-[8px] py-[6px]  
      md:text-base md:px-4 md:py-2 lg:border-[1.5px] lg:rounded-xl"> Buy tickets </Link>
                            <span className="menu-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


