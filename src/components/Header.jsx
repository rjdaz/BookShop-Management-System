import React from 'react';

function Header() {
  return ( 
    <div className='w-100% h-16 flex flex-row items-center bg-gray-600 text-white sticky top-0 z-50'>
      <div className='w-3/6 h-full flex items-center'>
        <h1 className='w-3/4 h-2/4 ml-7 flex items-center justify-center text-4xl font-bold'>
            BookShop Management System
        </h1>
      </div>
      <div className='w-3/6 h-full flex items-center justify-end'>
        <a href="/home" className='border-2 bg-gray-500 border-gray-500 w-1/6 h-2/4 flex items-center justify-center text-base font-bold mr-3 hover:bg-gray-400 hover:border-gray-400'>Home</a>
        <a href="/about" className='border-2 bg-gray-500 border-gray-500 w-1/6 h-2/4 flex items-center justify-center text-base font-bold mr-3 hover:bg-gray-400 hover:border-gray-400'>About</a>
        <a href="/login"className='border-2 bg-gray-500 border-gray-500 border-white w-1/6 h-2/4 flex items-center justify-center text-base font-bold mr-3 hover:bg-gray-400 hover:border-gray-400' >Log In</a>
      </div>
    </div>   
  );
}

export default Header;