import React from 'react';
import Header from '../components/Header';

function LogIn() {
  return (
    <>
        <Header />
        <div className='w-full h-screen flex items-center justify-center bg-gray-300'>
          <h1>LogIn</h1>
        <input type="text" placeholder="Username" />
        </div>
        
    </>
  );
}

export default LogIn;