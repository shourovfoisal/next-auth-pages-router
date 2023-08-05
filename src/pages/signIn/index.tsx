import { signIn } from 'next-auth/react'
import React, {useState} from 'react'
import Router from "next/router"

const SignInPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    signIn("userpass", { username, password, redirect: false }).then(
      (response) => {
        if(!response?.error) {
          Router.push('/');
        }
      }
    );
  }

  return (
    <div className='flex flex-col items-end gap-3'>
      
      <div className='flex items-center gap-2'>
        <label className='cursor-pointer' htmlFor="username">Username</label>
        <input
          id='username'
          className='p-2 rounded-lg'
          type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div className='flex items-center gap-2'>
        <label className='cursor-pointer' htmlFor="password">Password</label>
        <input 
          id='password'
          className='p-2 rounded-lg'
          type="text" value={password} onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <div>
        <button 
          className='p-2 bg-lime-300 rounded-lg' 
          onClick={handleLogin} type='button'>Submit</button>
      </div>

    </div>
  )
}

export default SignInPage