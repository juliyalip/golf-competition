import React from 'react'

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

export default function Button({children, ...rest}: ButtonProp){
    return(
        <button {...rest} className="transition-colors text-xl duration-150 
        easy-in-out border-2 border-white py-3 px-8 className='font-sembold'
         rounded-xl text-white bg-transparent hover:bg-blue-700 hover:border-blue-700">
            {children}</button>
    )
}