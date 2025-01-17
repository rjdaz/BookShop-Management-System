import React from 'react';
import { useState } from 'react';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitData = (e) => {

  };

  return (
    <>
        <div className='w-full h-screen flex items-center justify-center bg-gray-300'>
          <div 
            className='w-2/5 h-3/5 bg-slate-400 rounded-lg  shadow-lg flex flex-col items-center'>
              <h1 
                className='w-full h-1/5 flex justify-center items-center text-4xl font-bold'>
                  Registration
              </h1>
              <div 
                className='flex flex-col items-center w-full h-4/5 bg-red-400'>
                <input 
                  type="text" 
                  placeholder='Enter Username' 
                  className=''
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
                <input 
                  type="text" 
                  placeholder='Enter password'
                  className=''
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <input 
                  type="email" 
                  placeholder='Enter Email'
                  className=''
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <button
                  onClick={submitData}
                >Submit</button>
              </div>
          </div>
          
        </div>
        
    </>
  );
}

export default Registration;