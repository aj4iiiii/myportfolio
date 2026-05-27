import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className='flex font-family-dm-sans w-full min-h-screen justify-center items-start px-4 py-24 lg:py-32'>
      <div className="relative w-full bg-[url('/yellowabout.png')] bg-cover bg-center shadow-2xl mx-auto rounded-md max-w-[900px]">

        {/* Hanger decoration */}
        <Image
          src='https://framerusercontent.com/images/1DAU2T6QMpS5HJsmIxgZEXBLPJ8.svg'
          alt='hanger'
          className='absolute -top-6 max-w-[50px] right-12 z-10'
          width={100}
          height={100}
        />

        <div className='px-8 py-14 lg:px-16 lg:py-20'>

          {/* Top section: photo + intro side by side */}
          <div className='flex flex-col sm:flex-row gap-8 items-start mb-8'>

            {/* Profile photo */}
            <div className='shrink-0 mx-auto sm:mx-0'>
              <div className='w-36 h-44 sm:w-44 sm:h-52 lg:w-52 lg:h-64 rounded-md overflow-hidden shadow-lg border-[3px] border-[#c9ba9b]'>
                <Image
                  src='/cwhite.png'
                  alt='Ajay V'
                  width={400}
                  height={700}
                  className='w-full h-full object-cover object-top'
                />
              </div>
            </div>

            {/* Name + intro text */}
            <div className='flex flex-col justify-start'>
              <h1 className='font-display text-5xl lg:text-6xl mb-3 text-[#5c5440]'>About Me</h1>
              <p className='text-[15px] lg:text-[16px] leading-relaxed text-[#736a53]'>
                <span className='font-bold text-[#4a4332] text-xl font-display'>Hi, I&apos;m Ajay —</span>{' '}
                a Computer Science student and AI enthusiast passionate about building intelligent and impactful
                technology solutions. I enjoy exploring the intersection of AI, Software Development, and
                Problem Solving to create innovative and practical projects.
              </p>
              <p className='text-[15px] lg:text-[16px] leading-relaxed text-[#736a53] mt-3'>
                Currently working on Deep Learning, Computer Vision, and AI-powered healthcare systems.
                My major project <strong className='text-[#4a4332]'>NeuroDocX</strong> detects brain disorders
                from MRI scans using Explainable AI.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-[1px] bg-[#c9ba9b] mb-8' />

          {/* Details grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 text-[15px] lg:text-[16px] leading-relaxed text-[#736a53]'>

            <div>
              <h2 className='font-display text-3xl lg:text-4xl mb-3 text-[#5c5440]'>What I Do</h2>
              <ul className='space-y-1 font-medium list-disc pl-5'>
                <li>AI &amp; Machine Learning</li>
                <li>Deep Learning with Python</li>
                <li>Computer Vision Applications</li>
                <li>Full Stack Web Development</li>
                <li>Problem Solving &amp; Software Design</li>
                <li>Research and Innovation</li>
              </ul>
            </div>

            <div className='flex flex-col gap-6'>
              <div>
                <h2 className='font-display text-3xl lg:text-4xl mb-2 text-[#5c5440]'>My Goal</h2>
                <p>
                  Build technology that creates real impact, especially in healthcare and intelligent systems.
                  I continuously improve my skills and explore ideas that challenge me to grow.
                </p>
              </div>
              <div>
                <h2 className='font-display text-3xl lg:text-4xl mb-2 text-[#5c5440]'>Beyond Coding</h2>
                <p>
                  I enjoy learning about emerging technologies, exploring creative ideas, and collaborating
                  with people on innovative projects.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-[1px] bg-[#c9ba9b] mt-8 mb-5' />

          {/* Bottom quote */}
          <p className='font-display text-xl text-[#5c5440] italic text-center'>
            &quot;Building ideas, one line at a time.&quot;
          </p>

        </div>
      </div>
    </div>
  );
};

export default page;
