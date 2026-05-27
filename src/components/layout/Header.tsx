import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='w-full font-display bg-[url("/paper.png")] z-50 bg-repeat fixed text-4xl text-[#9F9F9F] items-center hidden  h-20 bg-transparent lg:flex justify-between px-20'>
      <div>AV</div>
      <div className='flex gap-10'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
      </div>
    </div>
  );
};

export default Header;
