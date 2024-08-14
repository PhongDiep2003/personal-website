import React from 'react'
import Image from 'next/image'
type Prop = {
  company: string | '',
  image: string | '',
  duration: string | '',
  role: string | ''
}
const ExperienceNode = ({company, image, duration, role}:Prop) => {
  return (
  <div className='flex flex-row lg:w-[40%] w-[100%]  '>
    <div className='flex flex-col items-center' >
      <Image className=' rounded-full' width={50} height={50} src={image} alt={`${company} icon`}/>
      <div className="relative border-l-2 border-gray-200 h-64"/>
    </div>
    <div className="flex items-center mb-2 gap-5 h-fit mt-14" >
            <Image width={50} height={20} src={'/straight_line.png'} alt='straight line' />
            <div>
              <p className="text-lg lg:text-2xl font-semibold text-gray-900">
                {role} <span className="text-green-500">✔</span>
              </p>
              <p className="lg:text-lg text-sm text-gray-600">
                {company}
              </p>
              <p className="lg:text-lg text-sm text-gray-600">
                {duration}
              </p>
            </div>
    </div>
  </div>
  )
}

export default ExperienceNode
