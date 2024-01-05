import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

const HomePage = () => {



  return (
    <div className='w-screen h-screen flex flex-col items-center overflow-x-clip bg-black'>
      <Navbar />
      <div className='mt-12 pb-20 bg-black'>
        <Gallery />
      </div>
    </div>
  )
}

export default HomePage
