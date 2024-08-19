import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <p className='text-2xl bg-primary font-mono font-semibold'>Welcome to my gallery</p>

      <div className='grid  lg:grid-cols-2 grid-cols-1 gap-36 mt-20  '>

        {/* Price Comparison */}
          <div className='lg:col-span-2  border-2 border-gray-100 shadow-lg ease-in-out duration-150 hover:scale-x-105 h-[35rem] '>
            <Link href={"https://j5price-comparison-eta.vercel.app"} target='_blank'>
              <ProjectCard image='/price_comparison.png' title='Price Comparison' description="My application streamlines the process of price comparison across multiple e-commerce platforms. Users simply enter the Amazon URL of the product they are interested in, and our app quickly scans other major e-commerce sites such as eBay to find that exact product's price. This enables users to make informed purchasing decisions, ensuring they get the best deal without the hassle of manual comparison."/>
            </Link>
          </div>
    
        {/* Resume Parser */}
        <Link href={"https://j5resume-parser-sage-alpha.vercel.app"} target='_blank'>
          <div className='border-gray-100 shadow-lg  ease-in-out duration-150 hover:scale-x-105 h-[40rem] bg-[#BEDDEF] hover:bg-white '>
              <ProjectCard image='/resume_parser.jpg' title='Resume Parser' description='My resume parser application streamlines the recruitment process for HR departments by filtering through large volumes of resumes to identify the best matches based on specified keywords. The application analyzes each resume, extracts relevant information, and compares with the specified keywords. The results are then presented in a PDF format, with all the matching keywords prominently highlighted, making it easier for HR professionals to identify the most suitable candidates quickly and efficiently.' />
          </div>
        </Link>

        {/* ScanSlate */}
        <Link href={"https://github.com/PhongDiep2003/Scanslate-2.0"} target='_blank'>
          <div className='border-gray-100 shadow-lg  ease-in-out duration-150 hover:scale-x-105 h-[40rem]'>
              <ProjectCard image='/scanslate.jpeg' title='ScanSlate' description="My scanslate application empowers users to easily identify unknown objects through their smartphone camera. With just a snap of a picture, the app leverages a pretrained machine learning model to classify and label the object. Additionally, Scanslate includes a robust translation feature, allowing users to translate the object's associated words into multiple languages. This makes the app an invaluable tool for travelers, educators, and anyone eager to explore the world without being restricted by language barriers. To enhance learning and engagement, Scanslate also features an integrated quiz platform, enabling users to test their memory through a flashcard-based system."/>
          </div>
        </Link>

        {/* Youtube Clone */}
        <Link href={"https://github.com/PhongDiep2003/Youtube-Clone"} target='_blank'>
          <div className='border-gray-100 shadow-lg h-[40rem] ease-in-out duration-150 hover:scale-x-105'>
            <ProjectCard image='/youtube_clone.jpg' title='Youtube Clone' description='This YouTube clone application replicates nearly every feature of the original YouTube platform, offering users a comprehensive video-sharing experience. Users can upload videos, sign in and out of their accounts, and stream content seamlessly. The backend infrastructure and video upload functionality are powered by Google Cloud Platform (GCP) services, including Cloud Run, Pub/Sub, Artifact Registry, and Google Storage. These services ensure a robust and scalable environment, allowing for efficient video processing and delivery, mirroring the performance and reliability of the real YouTube application.'/>
          </div>
        </Link>

        {/* Instagram Clone */}
        <Link href={"https://github.com/PhongDiep2003/Instagram-Clone"} target='_blank'>
          <div className=' border-gray-100 shadow-lg h-[40rem] ease-in-out duration-150 hover:scale-x-105'>
            <ProjectCard image='/instagram.avif' title='Instagram Clone' description='This Instagram clone application mimics nearly every element of the original Instagram platform, including the basic features of the popular social media that a typical user would have experienced. Users can seamlessly create an account or log in to their existing one, post feeds or view feeds from people they follow. The application allows users to customize their feed by following or unfollowing others, show appreciation for posts by liking or unliking them, and engage with content through comments. Additionally, users can connect with friends through direct messaging for private conversations. This application, overall, provides a comprehensive social media experience, enabling users to interact, share, and connect with others, just like the original Instagram.'/>
          </div>
        </Link>

        {/* Gmail Clone */}
        <Link href={"https://github.com/PhongDiep2003/CMPE131-Project"} target='_blank'>
          <div className='border-gray-100 shadow-lg h-[40rem] ease-in-out duration-150 hover:scale-x-105'>
            <ProjectCard  image='/gmail.webp' title='Gmail Clone' description="This Gmail clone application replicates nearly every feature of the original Google Gmail, such as account creation and email transmission. However, the goal is to make this application more than just a tool for sending and receiving messages; it also manages users' busy schedules with the built-in todo list feature, which allows users to create and assign todo lists. As a result, users utilize this Gmail clone not only as a tool for messaging, but also for boosting their productivity and teamwork."/>
          </div>
        </Link>

        {/* Calculator */}
        <Link href={"https://github.com/PhongDiep2003/Calculator_App"} target='_blank'>
          <div className='border-gray-100 shadow-lg h-[40rem] ease-in-out duration-150 hover:scale-x-105 bg-[#F7960E] hover:bg-white'>
            <ProjectCard image='/calculator.jpg' title='Calculator' description="This mobile calculator app allows users to do basic operations like as addition, subtraction, multiplication, and division for both integers and floating-point numbers. Additionally, the application also allows users to switch between light and dark mode, similar to the normal calculator found on smartphones."/>
          </div>
        </Link>

        {/* Flashcard */}
        <Link href={"https://github.com/PhongDiep2003/CS157A_Project"} target='_blank'>
          <div className='border-gray-100 shadow-lg h-[40rem] ease-in-out duration-150 hover:scale-x-105'>
            <ProjectCard image='/flashcard.png' title='Eduspark' description='This Eduspark application is created to streamline and digitize the traditional method of using 3 x 5 index cards for memorization. Instead of manually creating and reviewing physical flashcards, Eduspark allows users to easily create digital flashcards, organize them into custom decks, and quiz themselves efficiently. This modern approach makes the entire process quicker and more engaging.'/>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default page
