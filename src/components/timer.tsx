import Box from "./box"

const time = [{option: "Days", time:'232'},{option: "Hours", time:'232'}, {option: "Minutes", time:'232'},]



export default function Timer(){
    // hppp request
    return(
        <div className="grid grid-cols-3  w-fit gap-4 ml-auto  ">
            {time.map(({option, time} )=>(
                <Box key={option} option={option} time={time}/>
            ) )}

        </div>
    )
}