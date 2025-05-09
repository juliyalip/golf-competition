interface BoxProp{
    option: string,
    time: string
}

export default function Box({option, time}: BoxProp){
    return(
        <div className="w-30 h-30 bg-blue-600 flex items-center justify-center text-white rounded-lg flex-col ">
<span>{option}</span> <span> {time}</span>
        </div>
    )
} 