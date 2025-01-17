import React from 'react';

function Admin() {
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'> 
        <div className='w-5/6 h-5/6 bg-gray-300 rounded-3xl -mt-14 '>
          <div className='w-full h-1/6 bg-gray-500 flex flex-col'>
            <div className='w-full h-4/5 bg-red-400'>
              <h1 className=' h-full flex items-center bg-blue-600 pl-8 text-4xl font-bold'>Admin</h1>
            </div>
          </div>
          <div className='w-full h-5/6 bg-red-400 flex items-center '> 
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;