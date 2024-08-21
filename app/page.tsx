'use client'
import ExperienceNode from "../components/ExperienceNode";
import HeroCarousel from "@/components/HeroCarousel";
import useIsVisible from '../hooks/useIsVisible'
import { useRef } from "react";
export default function Home() {
  const ref1 = useRef(null)
  const isVisible1 = useIsVisible(ref1)

  const ref2 = useRef(null)
  const isVisible2 = useIsVisible(ref2)

  const ref3 = useRef(null)
  const isVisible3 = useIsVisible(ref3)

  const experiences = [
    {
      company: "The Software and Computer Engineering Society",
      image: "/sceIcon.ico",
      duration: "June 2024 - August 2024 • San Jose, California • Intern",
      role: "Software Engineering Intern"
    },
    {
      company: "Resilience Inc",
      image: "/resilienceLogo.jpeg",
      duration: "January 2023 - August 2023 • San Jose, California • Intern",
      role: "Mobile Application Developer"
    },
    {
      company: "San Jose State University",
      image: "/sjsuLogo.jpeg",
      duration: "January 2022 - May 2022 • San Jose, California • Part-time",
      role: "Grader"
    }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Intro */}
      <div className={`lg:w-[50%] w-full border-r-8 border-b-8 border-gray-200 border-solid py-10 gap-10 flex flex-col transition-opacity ease-in duration-700 delay-300 ${isVisible1 ? "opacity-100" : "opacity-0"}`} ref={ref1}>
        <p className="info-text">Hi there,</p>
        <p className="info-text">I'm Phong. I'm passionate about developing websites and leveraging artificial intelligence to automate tedious repetitive, and boring human work.</p>
        <p className="info-text"> Currently, I am an enrolled software engineering full-time student at <span className="text-[#E5A823] font-bold">San Jose State University</span>.</p>
        <p className="info-text">In my leisure time, I'd practice solving some technical questions on Leetcode to enhance my problem solving abilities as well as brushing up my knowledge of data structure and algorithms.</p>
        <p className="info-text">Other than that, I also usually engage in outdoor activities like working out, hiking, and soccer to enhance both my physical look and fitness.</p>
        <p className="info-text">My objective for the next 5 years is to learn as much as possible about new technologies, especially AI, gain extensive experience through work and collaboration with other people, and solidify my acquired knowledge.</p>
      </div>

      {/* Experience */}
      <div className={`w-full flex flex-col items-end pt-10 transition-opacity ease-in duration-700 delay-300 ${isVisible2 ? "opacity-100" : "opacity-0"}`} ref={ref2}>
        <p className="font-serif text-3xl">Experience</p>
        {/* Verical Timeline*/}
        <div className="flex flex-col items-center w-full mt-14">
          {experiences.map((experience, index) => (
            <ExperienceNode key={index} company={experience.company} image={experience.image} duration={experience.duration} role={experience.role} />
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className={`w-full flex flex-col items-start pt-10 transition-opacity ease-in duration-700 delay-300 ${isVisible3 ? "opacity-100" : "opacity-0"} `} ref={ref3}>
        <p className="font-serif text-3xl">Skills</p>
        <HeroCarousel />
      </div>
    </div>
  );
}
