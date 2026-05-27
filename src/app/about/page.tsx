import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='flex font-family-dm-sans w-full min-h-screen justify-center items-center px-4 py-32'>
      <div className="relative w-full bg-[url('/yellowabout.png')] px-8 py-16 lg:px-16 lg:py-20 bg-center max-w-[800px] bg-cover shadow-2xl mx-auto rounded-md">
        <Image
          src={
            'https://framerusercontent.com/images/1DAU2T6QMpS5HJsmIxgZEXBLPJ8.svg'
          }
          alt='hanger'
          className='absolute -top-6 max-w-[50px] right-12 z-10'
          width={100}
          height={100}
        />
        
        <h1 className='font-display text-5xl lg:text-6xl mb-8 text-[#5c5440]'>About Me</h1>
        
        <div className='space-y-6 text-[15px] lg:text-[16px] leading-relaxed text-[#736a53]'>
          <p>
            <span className='font-bold text-[#4a4332] text-xl font-display'>Hi, I’m Ajay —</span> a Computer Science student and AI enthusiast passionate about building intelligent and impactful technology solutions. I enjoy exploring the intersection of Artificial Intelligence, Software Development, and Problem Solving to create projects that are both innovative and practical.
          </p>
          
          <p>
            Currently, I’m working on projects related to Deep Learning, Computer Vision, and AI-powered healthcare systems. One of my major projects is <strong className='text-[#4a4332]'>NeuroDocX</strong>, an AI-based platform that detects brain disorders such as Alzheimer’s disease and brain tumors from MRI scans using Deep Learning and Explainable AI techniques.
          </p>
          
          <p>
            I’m also interested in full-stack development, AI assistants, and modern software engineering practices. I love learning new technologies, participating in hackathons, and turning ideas into real-world applications.
          </p>

          <div className='pt-4'>
            <h2 className='font-display text-4xl mb-3 text-[#5c5440]'>What I Do</h2>
            <ul className='list-disc pl-5 space-y-1 font-medium'>
              <li>AI & Machine Learning Projects</li>
              <li>Deep Learning with Python</li>
              <li>Computer Vision Applications</li>
              <li>Full Stack Web Development</li>
              <li>Problem Solving & Software Design</li>
              <li>Research and Innovation</li>
            </ul>
          </div>

          <div className='pt-4 text-[#736a53]'>
            <h2 className='font-display text-4xl mb-3 text-[#5c5440]'>My Goal</h2>
            <p>
              My goal is to build technology that can create real impact, especially in healthcare and intelligent systems. I continuously work on improving my technical skills and exploring new ideas that challenge me to grow as a developer.
            </p>
          </div>

          <div className='pt-4 pb-6'>
            <h2 className='font-display text-4xl mb-3 text-[#5c5440]'>Beyond Coding</h2>
            <p>
              Apart from coding, I enjoy learning about emerging technologies, exploring creative ideas, and collaborating with people on innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
