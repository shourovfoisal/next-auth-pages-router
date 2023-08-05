import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Layout = ({children}: any) => {
  return (
    <div className='flex min-h-screen'>
        <div className='h-screen bg-lime-600 flex-grow-[1] text-white'>
          <Navbar />
        </div>
        <div className='flex flex-col justify-center items-center h-screen bg-lime-200 flex-grow-[2]'>
          {children}
        </div>
    </div>
  )
}

export default Layout