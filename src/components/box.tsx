interface BoxProp {
    option: string,
    time: number
}

export default function Box({ option, time }: BoxProp) {
    return (<>
        <div className="w-15 h-15 md:w-35 md:h-35 bg-purple-900 
         flex items-center justify-center text-white text-[12px] md:text-2xl rounded-lg flex-col ">
            <span>{option}</span> <span className="font-bold"> {time}</span>          
        </div>
        </> )} 