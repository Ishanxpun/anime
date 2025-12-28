import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
   <nav className='h-[10px] absolute w-screen z-2 flex justify-between text-white text-xl font-light'>
        <div className='Left'>
         <Image src="/logo.png" alt="img" height={50} width={80}/>
        </div>
        <div className='midpart flex gap-6'>
           <Link href={"/"}>Home</Link>
           <Link href={"/anime"}>Anime</Link>
           <Link href={"/movies"}>Movies</Link>
           <Link href={"/popular"}>Popular</Link>
           <Link href={"/browse"}>Browse</Link>
        </div>
        <div className='right'>
             search
        </div>
  
    </nav>

  
  )
}

export default Nav