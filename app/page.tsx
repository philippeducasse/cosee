'use client'

import React from 'react'
import Navbar from './components/Navbar'
import UploadImage from './components/UploadImage'
import TagForm from './components/TagForm'
import Gallery from './components/Gallery'

const homePage = () => {
  return (
    <div>
      <Navbar />
      <section className='h-screen bg-cosee-y flex items-center justify-center text-center m-12'>
        <h1>Willkomen bei CoseePics! </h1>
      <UploadImage />
      <TagForm />
      {/* <Gallery /> */}
      </section>
    </div>
  )
}

export default homePage
