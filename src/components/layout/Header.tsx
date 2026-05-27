import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-[url("/paper.png")] bg-repeat border-b border-black/5'>
      <div className='max-w-[80rem] mx-auto flex items-center justify-between px-5 sm:px-10 lg:px-20 h-14 sm:h-16 lg:h-20'>
        {/* Logo */}
        <Link href='/' className='font-display text-3xl sm:text-4xl text-[#9F9F9F] leading-none'>
          AV
        </Link>

        {/* Nav Links */}
        <nav className='flex items-center gap-5 sm:gap-8 lg:gap-10'>
          <Link
            href='/'
            className='font-display text-xl sm:text-2xl lg:text-4xl text-[#9F9F9F] hover:text-[#3e3d41] transition-colors duration-200'
          >
            home
          </Link>
          <Link
            href='/about'
            className='font-display text-xl sm:text-2xl lg:text-4xl text-[#9F9F9F] hover:text-[#3e3d41] transition-colors duration-200'
          >
            about
          </Link>
          <Link
            href='/contact'
            className='font-display text-xl sm:text-2xl lg:text-4xl text-[#9F9F9F] hover:text-[#3e3d41] transition-colors duration-200'
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
