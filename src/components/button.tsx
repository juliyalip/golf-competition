import React from 'react'

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    className?: string
}

export default function Button({children, className="", ...rest}: ButtonProp){
    return(
        <button {...rest} className={`transition-colors text-[12px]  md:w-auto md:text-xl duration-150  py-1 border-[1px] rounded-[4px]
        ease-in-out border-white  md:py-3 md:px-8  md:border-[1.5px] font-semibold cursor-pointer
         md:rounded-xl md:absolute md:bottom-4 text-white bg-transparent hover:bg-blue-700 hover:border-blue-700 ${className}`}>
            {children}</button>
    )
}