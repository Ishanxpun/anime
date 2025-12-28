import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="relative z-40 mx-6 ">
      <nav className=" rounded-4xl px-6 absolute w-full flex justify-between text-white text-xl font-light  py-2 bg-white/1 backdrop-blur-sm  shadow-[2px_2px_5px_2px_rgba(0,0,0,0.3)] mt-4">
        <div className="Left">
          <Image src="/logo.png" alt="img" height={50} width={80} className="hover:scale-110 opacity-80"/>
        </div>
        <div className="midpart flex gap-6  pl-55">
          <Link href={"/"} className="hover:scale-110 ">Home</Link>
          <Link href={"/anime "} className="hover:scale-110">Anime</Link>
          <Link href={"/movies"} className="hover:scale-110">Movies</Link>
          <Link href={"/popular"} className="hover:scale-110">Popular</Link>
          <Link href={"/browse"} className="hover:scale-110">Browse</Link>
        </div>
        <div className="right flex">
          <div className="relative"> 
          <input
            type="text"
            placeholder="   Search "
            className="border rounded-md shadow inline-flex cursor-pointer opacity-70 bg-black/20 "
          />
           <div className=" inline p-1 rounded-md absolute bottom-1 right-1 opacity-70  " >🔍︎</div>
          </div>
         
         
        </div>
      </nav>
    </div>
  );
};

export default Nav;
