"use client"
import React, { useEffect, useState } from 'react'
import Timer from "./timer"
import Button from "./button"
import { getTimeLeft, TimeLeft } from '@/helpers/getTimeLeft'

export default function Baner() {
    const [targetTime, setTargetTime] = useState<TimeLeft | null>(null)

    useEffect(() => {
        const interveiId = setInterval(() => {
            const result = getTimeLeft(new Date("2025-09-22T15:30:00"));
            setTargetTime(result);
        }, 1000);
        return () => clearInterval(interveiId);
    }, []);

    return (
        <div className="bg-banner-gradient from-purple-900 via-purple-950 to-black absolute z-20 top-[60%] px-[15px]  left-0 pb-[20px] w-full rounded-b-lg sm:rounded-b-2xl sm:rounded-t-2xl
     sm:left-[2%] sm:w-[96%] sm:bottom-[2%] lg:pt-[20px] text-white lg:px-[25px]" >
            <div className='flex flex-col justify-center pt-[10px] items-center sm:flex-row w-full sm:justify-between sm:items-center sm:text-start md:items-start'>
                <div>
                    <div className='font-sembold text-[12px] sm:text-[14px] mb-[8px] md:text-[16px] lg:text-4xl lg:mb-4'>September 22nd, 2025</div>
                    <div className='font-bold text-[12px] mb-[10px] md:text-[16px] lg:text-4xl'>
                        Only <span>{targetTime?.days}</span> days left
                    </div>
                </div>
                <Timer targetTime={targetTime} />
            </div>
            <Button>Buy tickets</Button>
        </div>
    )
}




