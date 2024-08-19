"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const NavBar = () => {
  const currentPath = usePathname()
  return (
    <div className='nav' >
      
      <Link href={"https://drive.google.com/file/d/1GvAgsvwpXqWD5Dq7ySMiunmIUDAyuvqA/view?usp=sharing"} target='_blank'>
        <p className='text-2xl font-serif cursor-pointer  font-medium '>resume</p>
      </Link>

      <Link href={"/work"}>
        <p className= {currentPath == '/work' ? 'text-2xl font-serif cursor-pointer  font-medium line-through ' : 'text-2xl font-serif cursor-pointer  font-medium '}>work</p>
      </Link>

      <Link href={"/"}>
        <p className={currentPath == '/' ? 'text-2xl font-serif cursor-pointer  font-medium line-through ' : 'text-2xl font-serif cursor-pointer  font-medium '}>info</p>
      </Link>
    </div>
  )
}

export default NavBar
