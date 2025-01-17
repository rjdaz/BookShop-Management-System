import React from 'react';
import Header from '../components/Header';


function Admin({isAuthenticated}) {
  return (
    <>
      {/* <Header isAuthenticated={isAuthenticated}/> */}
      <div className='w-full h-screen flex items-center justify-center'> 
        <div 
          className='w-5/6 h-5/6 bg-gray-300 rounded-3xl'>
          <h1 className=''>Admin</h1>
        </div>
      </div>
    </>
  );
}

export default Admin;