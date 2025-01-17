import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function LogIn({ setIsAuthenticated, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const loginPage = (e) => {
    console.log('Username:', username);
    console.log('Password:', password);

    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      //window.location.href = '/admin';
      //navigate('/admin');
      navigate('/admin');
      
    }else if (username === 'user' && password === 'user') {
      setIsAuthenticated(true);
      //window.location.href = '/home';
      //navigate('/home');
      navigate('/home');
      
    }else {
      alert('Invalid Username or Password');
    }
  };

  //console.log('isAuthenticated:', isAuthenticated);

  return (
    <>
      {/* <Header isAuthenticated={isAuthenticated}/> */}
      <div 
        className='w-full h-screen flex items-center justify-center bg-gray-300'>
        <div 
          className='w-1/4 h-1/2 flex flex-col items-center bg-gray-400 rounded-lg shadow-lg'>
          <h1 
            className='w-full h-1/5 mt-0 flex justify-center items-center text-4xl font-bold'>
            Log In
          </h1>
          <div 
            className='w-full h-4/5 selection:h-1/2 flex items-center flex-col '>
          <input 
            type="text" 
            placeholder="Username" 
            className=' w-3/5 h-8 border-2 border-gray-500 mt-10 pl-3'
            id='username'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              }}/>
          <input 
            type="password" 
            placeholder="Password" 
            className='w-3/5 h-8 border-2 border-gray-500 mt-6 pl-3'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <p 
            className='mt-3 text-blue-700'>
              <a href="/register">
                Create New Account
              </a>
          </p>
          <button 
            className='w-3/5 bg-green-500 mt-8 h-10'
            onClick={loginPage}>
              Log In
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;