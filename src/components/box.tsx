interface BoxProp {
    option: string,
    time: number
}

export default function Box({ option, time }: BoxProp) {
    return (<>
        <div className="w-35 h-35 bg-purple-900 
         flex items-center justify-center text-white text-2xl rounded-lg flex-col ">
            <span>{option}</span> <span className="font-bold"> {time}</span>          
        </div>
        </> )} 