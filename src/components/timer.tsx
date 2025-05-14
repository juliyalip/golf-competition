"use client";
import Box from "./box";
import { TimeLeft } from "@/helpers/getTimeLeft";

interface TimerProp{
  targetTime: TimeLeft | null
}

export default function Timer({targetTime}: TimerProp) {
if(!targetTime){
  return null
}

    const options = [
    { option: "Days", time: targetTime.days },
    { option: "Hours", time: targetTime.hours},
    { option: "Minutes", time: targetTime.minutes },
  ];

  return (
    <div className="grid grid-cols-3  w-fit gap-2 mx-auto sm:mx-0 sm:ml-auto  md:mx-0 lg:pt-0">
      {options.map(({ option, time }) => (
        <Box key={option} option={option} time={time} />
      ))}
    </div>
  );
}

