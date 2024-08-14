import Image from 'next/image'
import React from 'react'

type SkillProps = {
  skills: React.ReactNode[]; // or an array of specific skill objects, depending on your case
};


const SkillPage = ({skills}:SkillProps) => {
  return (
    <div className='flex flex-row flex-wrap justify-between'>
      {skills.map((skill, index) => (
        <div key={index} className='lg:m-3  lg:w-1/4  w-1/2 mt-3  flex justify-center '>
          {skill}
        </div>
      ))}
    </div>
  )
}

export default SkillPage
