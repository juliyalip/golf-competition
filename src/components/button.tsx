import React from 'react'

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
}

export default function Button({children, className="", ...rest}: ButtonProp){
    return(
        <button {...rest} className={`block mx-auto  w-full text-[12px] font-semibold cursor-pointer 
          py-1 px-2 border-[1px]  border-white rounded-[4px] text-white bg-transparent  
          transition-colors ease-in-out  duration-150  mt-4 
          hover:bg-blue-700 hover:border-blue-700
         md:py-[8px] md:px-[20px] md:mt-[15px] md:border-[1.5px] md:text-base md:rounded-xl 
     
        xl:w-[15%]  xl:py-[15px] xl:px-[25px] xl:text-[18px] xl:bottom-6  xl:ml-0  `}>
            {children}</button>
    )
}