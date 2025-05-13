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
        <div  className="absolute inset-x-0  z-20 top-[55%] left-[50%] transform -translate-x-[50%] px-6 rounded-b-lg flex flex-col  text-center
           sm:top-[40%] sm:px-8 pt-3 pb-5  md:px-10 md:flex-row md:text-left  md:top-[65%]
            bg-radial-[at_50%_99%]  from-purple-900 via-purple-950 to-black to-100% w-full max-w-[1100px] 
      
                text-white  md:rounded-t-2xl md:rounded-b-2xl  lg:pt-6 lg:bottom-6 " >

<div className='flex flex-col justify-center items-center sm:flex-row w-full sm:justify-between sm:items-center sm:text-start md:items-start'>
            <div>
                <div className='font-sembold text-[12px] sm:text-[14px] mb-[8px] md:text-[16px] lg:text-2xl lg:mb-4'>September 22nd, 2025</div>
                <div className='font-bold text-[12px] mb-[10px] md:text-[16px] lg:text-2xl'>
                    Only <span>{dateLeft}</span> days left
                </div>
            </div>
            <Timer />
         </div>
             <Button>Buy tickets</Button>
        </div>
</div>
    )
}




