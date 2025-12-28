import Nav from "@/components/Nav";
import React from "react";
import { Inter } from "next/font/google";
import { Geist,Geist_Mono } from "next/font/google";
import { Jersey_10, Russo_One } from "next/font/google";

const geistS = Geist({
  weight:"600",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistM = Geist_Mono({
  weight:"900",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

const russo = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
   
      <div className="h-screen w-screen overflow-hidden relative ">
        <video
          autoPlay
          muted
          src="/videos/animegirl.mp4"
          className="object-cover w-full h-full"
        ></video>
        <div className={`absolute z-40 bottom-30 left-8 ${russo.className} `}> 
         <div className=" text-white/70   text-5xl flex gap-4">A <div className="text-white/70">Portal</div> to <div className="text-red-400">Escape Reality</div></div>  
          <div className="text-white/40 text-2xl">“A World Waiting to Be Explored"</div>
          </div>
        
      </div>
     
    
  );
};

export default page;
