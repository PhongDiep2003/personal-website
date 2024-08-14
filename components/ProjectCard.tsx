'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
type ProjectCardProps = {
  image: string,
  title: string,
  description: string
}


const ProjectCard = ({image, title, description}:ProjectCardProps) => {
  return (

<div className="relative w-full h-full group ">
    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-200  ">
    <Image src={image} fill alt={`${title} image`} objectFit='contain' className='opacity-100 hover:opacity-0'/>
    </div>
    <div id={title} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-10 overflow-y-auto h-full scroll-smooth cursor-pointer ">
      <p className='text-2xl bg-primary font-mono font-semibold '>{title}</p>
      <p className='text-lg leading-loose font-mono  '><span className='font-medium'>Description: </span>{description}</p>
    </div>
</div>
    
  )
}

export default ProjectCard
