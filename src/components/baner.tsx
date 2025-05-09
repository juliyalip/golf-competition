"use client"
import React, { useState } from 'react'
import Timer from "./timer"
import Button from "./button"


export default function Baner() {
    const [days, setDays] = useState(0)
    return (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-radial-[at_50%_75%]
         from-sky-200 via-blue-400 to-indigo-900 to-90% w-[1250px]
          h-80 flex items-center text-white px-10 rounded-2xl " >
            <div >
                <div className='font-sembold text-3xl mb-10'>September 22nd, 2025</div>
                <div className='font-bold text-4xl mb-10'>Only <span>{days}</span> days left</div>
                <Button>Buy tickets</Button>
            </div>
            <Timer />

        </div>
    )
}
