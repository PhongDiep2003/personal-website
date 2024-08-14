"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const NavBar = () => {
  const currentPath = usePathname()
  return (
    <div className='nav' >

      <p className='text-2xl font-serif cursor-pointer  font-medium '>resume</p>


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
