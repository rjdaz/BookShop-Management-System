import React from 'react';
import Header from '../components/Header';
import bookstoreImage from '../images/bookstore.webp';

function Home() {
  return (
    <>
      {/* <Header isAuthenticated={isAuthenticated}/> */}
      <div className='w-full h-screen flex bg-gray-300'>
        <div className='w-4/6 h-full flex bg-gray-300' >
          <div className='w-1/4 h-56 bg-slate-300 m-4 rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold'>Title</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius velit. Nullam sit amet nisi nec nunc tincidunt tincidunt</p>

          </div>
          <div className='w-1/4 h-56 bg-slate-300 m-4 rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold'>Title</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius velit. Nullam sit amet nisi nec nunc tincidunt tincidunt</p>
          </div>
        </div>
        <div className='w-2/6 h-full bg-gray-200' >
          <div className='w-5/6 h-full m-auto ' > 
          <img src={bookstoreImage} alt="Bookstore" className='w-full h-full opacity-70' />
          </div>
        </div>
      </div>
        
    </>
  );
}

export default Home;