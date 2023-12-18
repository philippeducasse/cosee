import React from 'react'
import Navbar from './components/Navbar'
import UploadImage from './components/UploadImage'

const homePage = () => {
  return (
    <div>
      <Navbar />
      <section className='h-screen bg-cosee-y flex items-center justify-center text-center m-12'>
        <h1>Willkomen bei CoseePics! </h1>
      <UploadImage />
      </section>
    </div>
  )
}

export default homePage
