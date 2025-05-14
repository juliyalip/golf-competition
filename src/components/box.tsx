interface BoxProp {
    option: string,
    time: number
}

export default function Box({ option, time }: BoxProp) {
    return (<>
        <div className="w-12 h-12 sm:w-35 sm:h-35    bg-purple-900 
         flex items-center justify-center text-white text-[10px] md:w-[80px] md:h-[80px] md:text-base lg:text-2xl 
          lg:w-[130px] lg:h-[130px]  rounded-lg flex-col ">
            <span>{option}</span> <span className="font-bold"> {time}</span>          
        </div>
        </> )} 