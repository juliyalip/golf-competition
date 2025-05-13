"use client"

import React, {useRef} from "react";
import Baner from "./baner";
import Ball from "./ball";

export default function Hero() {
const scroll = useRef(null)

  return (
    <div className="relative container mx-auto px-4">
      <Ball scrollTargetRef={scroll}/>
        <div className="relative w-full max-w-[1200px] mx-auto ">
            <img src="/images/golfer.webp"
              srcSet="/images/golfer_1.png 1x, /images/golfer_2x.png 2x, /images/golfer_3x.png 3x"
              className="w-full h-auto object-contain rounded-2xl md:rounded-4xl"
              alt="golfer"
            />
          <Baner/>
        </div>
    </div>
  );
}
