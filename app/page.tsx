import React from 'react'
import Navbar from './components/Navbar'

const homePage = () => {
  return (
    <div>
      <Navbar />
      <section className='h-screen bg-cosee-y flex items-center justify-center text-center m-12'>
        <h1>Willkomen bei Cosee!</h1>
      </section>
    </div>
  )
}

export default homePage
