import React from 'react'
import {signOut} from 'next-auth/react'
import Router from "next/router"

const SignOut = () => {

  const handleLogout = async () => {
    signOut({ redirect: false }).then(
      (response) => {
        if(response.url) {  // a url in the response means that signout was successful
          Router.push('/');
        }
      }
    );;
  }

  return (
    <div className='flex flex-col items-end gap-3'>
      <div>
        <button 
          className='p-2 bg-lime-300 rounded-lg' 
          onClick={handleLogout} type='button'>Sign Out</button>
      </div>

    </div>
  )
}

export default SignOut