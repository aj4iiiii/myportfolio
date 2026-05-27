import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex font-family-dm-sans w-full min-h-screen justify-center items-center px-4 py-32'>
      <div className="relative w-full bg-[url('/yellowabout.png')] px-8 py-16 lg:px-16 lg:py-20 bg-center max-w-[700px] bg-cover shadow-2xl mx-auto rounded-md">
        <Image
          src={
            'https://framerusercontent.com/images/1DAU2T6QMpS5HJsmIxgZEXBLPJ8.svg'
          }
          alt='hanger'
          className='absolute -top-6 max-w-[50px] right-12 z-10'
          width={100}
          height={100}
        />

        <h1 className='font-display text-5xl lg:text-6xl mb-2 text-[#5c5440]'>Contact</h1>
        <p className='font-family-dm-sans text-[#736a53] text-[15px] mb-10 leading-relaxed'>
          I&apos;m always open to new opportunities, collaborations, and conversations. Feel free to reach out!
        </p>

        <div className='space-y-6'>

          {/* Email */}
          <div className='flex items-start gap-4'>
            <span className='text-2xl mt-0.5'>✉️</span>
            <div>
              <p className='font-display text-2xl text-[#5c5440] mb-0.5'>Email</p>
              <a
                href='mailto:ajay.vyleri2005@gmail.com'
                className='font-family-dm-sans text-[15px] text-[#736a53] hover:text-[#4a4332] underline underline-offset-2 transition-colors'
              >
                ajay.vyleri2005@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className='flex items-start gap-4'>
            <span className='text-2xl mt-0.5'>💼</span>
            <div>
              <p className='font-display text-2xl text-[#5c5440] mb-0.5'>LinkedIn</p>
              <a
                href='https://www.linkedin.com/in/ajay-v-701928300/'
                target='_blank'
                rel='noopener noreferrer'
                className='font-family-dm-sans text-[15px] text-[#736a53] hover:text-[#4a4332] underline underline-offset-2 transition-colors'
              >
                Visit My LinkedIn Profile
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className='flex items-start gap-4'>
            <span className='text-2xl mt-0.5'>🐙</span>
            <div>
              <p className='font-display text-2xl text-[#5c5440] mb-0.5'>GitHub</p>
              <a
                href='https://github.com/aj4iiiii'
                target='_blank'
                rel='noopener noreferrer'
                className='font-family-dm-sans text-[15px] text-[#736a53] hover:text-[#4a4332] underline underline-offset-2 transition-colors'
              >
                Visit My Github Profile
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className='flex items-start gap-4'>
            <span className='text-2xl mt-0.5'>📞</span>
            <div>
              <p className='font-display text-2xl text-[#5c5440] mb-0.5'>Phone</p>
              <a
                href='tel:8891259790'
                className='font-family-dm-sans text-[15px] text-[#736a53] hover:text-[#4a4332] underline underline-offset-2 transition-colors'
              >
                +91 8891259790
              </a>
            </div>
          </div>

          {/* Location */}
          <div className='flex items-start gap-4'>
            <span className='text-2xl mt-0.5'>📍</span>
            <div>
              <p className='font-display text-2xl text-[#5c5440] mb-0.5'>Location</p>
              <p className='font-family-dm-sans text-[15px] text-[#736a53]'>
                India, Kerala
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-[1px] bg-[#c9ba9b] my-4' />

          {/* CTA note */}
          <p className='font-display text-xl text-[#5c5440] italic'>
            &quot;Let&apos;s build something amazing together.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
