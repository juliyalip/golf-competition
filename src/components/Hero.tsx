import React from "react";
import Baner from "./baner";
import Ball from "./ball";

export default function Hero() {
  return (
    <div className="relative">
   <Ball />
      <div className="relative w-[1300px] overflow-hidden rounded-4xl">
        <img
          width={1300}
          height={800}
          src="/images/golfer.webp"
         srcSet="/images/golfer_1.png 1x, /images/golfer_2x.png 2x, /images/golfer_3x.png 3x"
         
          className="w-full h-full object-contain"
          alt="golfer"
        />

        <Baner />
      </div>
    </div>
  );
}
