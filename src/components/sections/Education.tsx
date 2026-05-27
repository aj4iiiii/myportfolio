import React from 'react';

const Education = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 py-24 w-full'>
      <p className='font-display relative text-6xl lg:text-8xl w-[300px] my-2 text-left inline-block lg:w-full lg:max-w-[63rem] text-gray-700'>
        Education{' '}
        <svg
          viewBox='0 0 166.632 21.953'
          overflow='visible'
          className='hidden lg:absolute inset-0 lg:block max-w-[170px] top-[45px] left-[350px]'
        >
          <path
            d='M 11.463 20.511 C -20.412 16.704 22.566 -11.331 39.132 5.143 C 55.698 21.618 43.132 12.872 43.132 12.872 L 57.781 7.513 C 61.058 6.314 64.698 7.897 66.055 11.112 L 69.081 18.28 C 69.969 20.384 72.276 21.507 74.48 20.91 L 92.457 16.037 C 100.074 13.972 108.129 14.175 115.632 16.622 L 115.632 16.622 C 123.251 19.107 131.214 20.372 139.228 20.372 L 166.632 20.372'
            fill='transparent'
            strokeWidth='7'
            stroke='#AAA'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </p>

      <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 mt-14 w-full max-w-[63rem] justify-start'>
        <div className='bg-white/80 p-8 shadow-xl border-black/10 border-2 flex flex-col relative w-full lg:w-1/2 min-h-[220px]'>
          <div className='flex justify-between items-start mb-6'>
            <span className='text-4xl'>🎓</span>
            <span className='font-family-dm-sans text-sm text-[#484848] font-bold tracking-wider uppercase'>2023 — CURRENT</span>
          </div>
          <h3 className='font-display text-4xl md:text-5xl mb-3 text-primary'>B.Tech in Computer Engineering</h3>
          <p className='font-family-dm-sans text-[#484848] mb-8 font-medium'>Jyothi Engineering College, Thrissur</p>
          <p className='font-family-dm-sans font-bold text-cyan-600 mt-auto tracking-wide text-lg'>GPA: 7.21 / 10.0</p>
        </div>

        <div className='bg-white/80 p-8 shadow-xl border-black/10 border-2 flex flex-col relative w-full lg:w-1/2 min-h-[220px]'>
          <div className='flex justify-between items-start mb-6'>
            <span className='text-4xl'>📜</span>
            <span className='font-family-dm-sans text-sm text-[#484848] font-bold tracking-wider uppercase'>2021 — 2023</span>
          </div>
          <h3 className='font-display text-4xl md:text-5xl mb-3 text-primary'>Higher Secondary (XII)</h3>
          <p className='font-family-dm-sans text-[#484848] mb-8 font-medium'>IHRD Technical School, Perinthalmanna</p>
          <p className='font-family-dm-sans font-bold text-cyan-600 mt-auto tracking-wide text-lg'>PERCENTAGE: 96%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
