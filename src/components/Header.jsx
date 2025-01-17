import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ isAuthenticated, handleLogout }) {
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <header className='w-100% h-16 flex flex-row items-center bg-gray-400 text-white sticky top-0 z-50'>
      <div className='w-3/6 h-full flex items-center'>
        <h1 className='w-3/4 h-2/4 ml-7 flex items-center justify-center text-4xl font-bold'>
          BookShop Management System
        </h1>
      </div>
      <div className='w-3/6 h-full flex items-center justify-end'>
        <Link to="/home" className='border-2 bg-gray-500 border-gray-500 w-1/6 h-2/4 flex items-center justify-center text-base font-bold mr-3 hover:bg-white hover:border-gray-400 hover:text-black'>Home</Link>
        <Link to="/about" className='border-2 bg-gray-500 border-gray-500 w-1/6 h-2/4 flex items-center justify-center text-base font-bold mr-3 hover:bg-white hover:border-gray-400 hover:text-black'>About</Link>
        {isAuthenticated ? (
          <button onClick={handleLogOutClick} className='border-2 bg-gray-500 border-gray-500 w-1/6 h-2/4 flex items-center justify-center text-base font-bold mr-3 hover:bg-white hover:border-gray-400 hover:text-black'>
            Log Out
          </button>
        ) : (
          <Link to="/login" className='border-2 bg-gray-500 border-gray-500 w-1/6 h-2/4 flex items-center justify-center text-base font-bold mr-3 hover:bg-white hover:border-gray-400 hover:text-black'>
            Log In
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;