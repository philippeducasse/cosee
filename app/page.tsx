import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

const HomePage = () => {
  
  

  return (
    <div>
      <Navbar />
      <section className='h-screen bg-cosee-y flex items-center justify-center text-center m-12'>
        {/* <h1>Willkomen bei CoseePics! </h1>
        <a href='upload-image'>Upload an Image </a> */}
      <Gallery />
      </section>
    </div>
  )
}

export default HomePage
