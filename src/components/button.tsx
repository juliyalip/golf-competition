import React from 'react'

//  library className !!!
interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    className?: string
   
}

export default function Button({children, className="", ...rest}: ButtonProp){
    return(
        <button {...rest} className={`transition-colors text-xl duration-150 
        easy-in-out border-2 border-white py-3 px-8 font-semibold cursor-pointer
         rounded-xl text-white bg-transparent hover:bg-blue-700 hover:border-blue-700 ${className}`}>
            {children}</button>
    )
}