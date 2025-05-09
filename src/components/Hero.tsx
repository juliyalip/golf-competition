import Image from 'next/image'
import React from 'react'
import Baner from './baner'
import Ball from './ball'


export default function Hero(){
    return(
        <div className='relative  w-[1300px] overflow-hidden rounded-4xl'>
            <Image width={1300} height={700} src='/images/golfer.webp' alt="golfer"/>
         <Ball />
            <Baner />
           
        </div>
    )
}