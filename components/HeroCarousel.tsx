"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SkillPage from './SkillPage';
import { programmingLangsIcon, frameworksIcon } from '@/svgPaths';

const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      interval={2000} 
    >
      <SkillPage skills={programmingLangsIcon} />
      <SkillPage skills={frameworksIcon} />
  </Carousel>
  )
}

export default HeroCarousel
