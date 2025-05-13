import React from 'react'

interface Prop{
    children: React.ReactNode
}

export default function Container({children}: Prop){
return(
    <div className='container mx-auto px-4 '>
        {children}
    </div>
)}