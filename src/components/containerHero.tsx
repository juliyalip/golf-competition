"use client";
import React from "react";
import { motion } from "framer-motion";

interface Prop {
  children: React.ReactNode;
}

export default function ContainerHero({ children }: Prop) {
  return (
    <div className="w-full min-h-screen relative overflow-hidden m-0">
      <motion.div
        className="absolute top-[-10vh] left-0 w-full h-[80vh] -z-10"
        style={{
          backgroundImage: `url('/images/background_1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute top-0 left-0 w-full -z-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, rgba(156, 163, 175, 0) 60vh, #9ca3af 100%)`,
        }}
      />
      <div className="relative z-10 text-black p-6">{children}</div>
    </div>
  );
}
