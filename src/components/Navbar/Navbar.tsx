import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-start items-center h-full mt-8 gap-8'>
        <Link className='p-8 bg-lime-500 rounded-lg' href={`/`}>Home</Link>
        <Link className='p-8 bg-lime-500 rounded-lg' href={`/client`}>Client</Link>
        <Link className='p-8 bg-lime-500 rounded-lg' href={`/server`}>Server</Link>
        <Link className='px-8 py-4 my-4 bg-lime-700 rounded-lg' href={`/signOut`}>Sign Out</Link>
    </div>
  )
}

export default Navbar