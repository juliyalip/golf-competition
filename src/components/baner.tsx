"use client"
import React, { useState } from 'react'
import Timer from "./timer"
import Button from "./button"


export default function Baner() {
    const [days, setDays] = useState(0)
    return (
        <div className="absolute z-20 bottom-5 left-1/2 transform -translate-x-1/2 
        bg-radial-[at_50%_99%]   from-purple-900 via-purple-950 to-black to-100% w-[1250px]
          h-80 flex items-center text-white px-10 rounded-2xl " >
            <div >
                <div className='font-sembold text-5xl mb-10'>September 22nd, 2025</div>
                <div className='font-bold text-5xl mb-10'>Only <span>{days}</span> days left</div>
                <Button>Buy tickets</Button>
            </div>
            <Timer />
        </div>
    )
}

