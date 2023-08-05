import React, {useState} from 'react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import Router from "next/router"
import {signOut} from 'next-auth/react'

const TwoFactorPage = () => {

  const searchParams = useSearchParams();

  const [verification, setVerification] = useState("");

  const handleLogin = () => {
    signIn("twofactor", { username: searchParams.get('user'), verification, redirect: false }).then(
      (response) => {
        if(!response?.error) {
          Router.push('/');
        }
      }
    );
  }

  const handleLogout = () => {  // logs out from first stage sign in
    signOut({ redirect: false }).then(
      (response) => {
        if(response?.url) {
          Router.push('/');
        }
      }
    );
  }

  return (
    <div className='flex flex-col items-end gap-3'>
      
      <div className='flex items-center gap-2'>
        <label className='cursor-pointer' htmlFor="verification">Verification Code</label>
        <input
          id='verification'
          className='p-2 rounded-lg'
          type="text" value={verification} onChange={(e) => setVerification(e.target.value)} 
        />
      </div>

      <div>
        <button 
          className='p-2 bg-lime-300 rounded-lg' 
          onClick={handleLogin} type='button'>Submit</button>
      </div>

      <div className='w-full text-center mt-10 p-10 bg-lime-100'>
        <button 
            className='p-2 bg-lime-300 rounded-lg' 
            onClick={handleLogout} type='button'>&larr; Back To Login</button>
      </div>
    
    </div>
  )
}

export default TwoFactorPage