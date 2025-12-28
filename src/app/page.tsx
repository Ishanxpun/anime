import Nav from "@/components/Nav";
import React from "react";
import { Inter } from "next/font/google";
const page = () => {
  return (
   
      <div className="h-screen w-screen overflow-hidden relative ">
        <video
          autoPlay
          muted
          src="/videos/animegirl.mp4"
          className="object-cover w-full h-full"
        ></video>
        <div className="absolute z-40 bottom-10 left-5"> 
         <div className=" text-white  font-In text-5xl flex gap-3">A <div className="text-red-400">Portal</div> to <div className="text-red-400">Escape Reality</div></div>  
          <div className="text-white text-2xl">“A World Waiting to Be Explored"</div>
          </div>
        
      </div>
     
    
  );
};

export default page;
