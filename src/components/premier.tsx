"use client"
import Image from "next/image"

export default function Premier() {
    return (
        <div className="mb-30 text-center mx-auto">      
            <Image src='/charity.svg' alt="logo charity" width={300} height={150} className="mx-auto"/>       
            <div className="mb-20 font-normal text-2xl">PREMIER 2025</div>
            <h1 className="font-semibold text-8xl">Let’s Drive Change!</h1>         
        </div>
    )
}