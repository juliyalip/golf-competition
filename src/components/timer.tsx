"use client";
import { useState, useEffect } from "react";
import Box from "./box";
import { getTimeLeft, TimeLeft } from "@/helpers/getTimeLeft";

const targetDate = new Date("2025-09-22T15:30:00");

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    const interveiId = setInterval(() => {
      const result = getTimeLeft(targetDate);
      setTimeLeft(result);
    }, 1000);
    return () => clearInterval(interveiId);
  }, []);

  const options = [
    { option: "Days", time: timeLeft.days },
    { option: "Hours", time: timeLeft.hours },
    { option: "Minutes", time: timeLeft.minutes },
  ];

  return (
    <div className="grid grid-cols-3  w-fit gap-2 mx-auto mb-4 md:mx-0 md:ml-auto    ">
      {options.map(({ option, time }) => (
        <Box key={option} option={option} time={time} />
      ))}
    </div>
  );
}
