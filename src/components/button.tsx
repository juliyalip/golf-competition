import React from 'react'

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    
}

export default function Button({children, className="", ...rest}: ButtonProp){
    return(
        <button {...rest} className={`transition-colors text-[12px]  md:w-auto  duration-150  py-1 border-[1px] rounded-[4px]
        ease-in-out border-white mt-4  md:py-[8px] md:px-[20px] md:mt-[10px] md:border-[1.5px] font-semibold cursor-pointer 
         md:rounded-xl md:absolute md:bottom-3 md:text-base text-white bg-transparent
          hover:bg-blue-700 hover:border-blue-700 xl:bottom-6 xl:text-2xl xl:px-[35px] xl:py-[15px]`}>
            {children}</button>
    )
}