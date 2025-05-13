"use client"
import React , {useMemo} from 'react'
import Timer from "./timer"
import Button from "./button"
import { getTimeLeft } from '@/helpers/getTimeLeft'

export default function Baner() {
   const targetDate = useMemo(() =>{
    return getTimeLeft(new Date("2025-09-22T15:30:00"))
   },[]);
  const dateLeft =targetDate.days
    return (
    <div className='md:px-4'>
        <div className="absolute z-20 top-[50%] left-[50%] transform -translate-x-[50%] px-6  flex flex-col  text-center
       sm:top-[40%] sm:px-8 pt-3 pb-5 md:px-10 md:flex-row md:text-left 

       md:top-[65%]
        bg-radial-[at_50%_99%]  from-purple-900 via-purple-950 to-black to-100% w-full max-w-[1100px] 
            text-white  md:rounded-2xl  lg:pt-6 lg:bottom-4" >
            <div className='mb-5 md:mb-10'>
                <div className='font-sembold text-lx  mb-[10px] md:text-base lg:text-2xl lg:mb-4'>September 22nd, 2025</div>
                <div className='font-bold text-lx
                mb:text-2xl lg:text-2xl'>Only <span>{dateLeft}</span> days left</div>
            </div>
            <Timer />
             <Button>Buy tickets</Button>
        </div>
</div>
    )
}

