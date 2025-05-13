interface BoxProp {
    option: string,
    time: number
}

export default function Box({ option, time }: BoxProp) {
    return (<>
        <div className="w-12 h-12 sm:w-15 sm:h-15  md:w-25 md:h-25 lg:w-35 lg:h-35 bg-purple-900 
         flex items-center justify-center text-white text-[10px] md:text-base lg:text-2xl rounded-lg flex-col ">
            <span>{option}</span> <span className="font-bold"> {time}</span>          
        </div>
        </> )} 