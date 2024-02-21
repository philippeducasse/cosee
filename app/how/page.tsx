import React from 'react'
import Navbar from '../components/Navbar'

const Cosee = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col  lg:w-1/2 bg-white bg-opacity-80 mx-auto p-6'>
                <h1 className='text-3xl mx-auto my-4'>Welcome to Ai-Gram!</h1>
                <p className=' text-center text-lg mx-auto'>Ai-Gram allows you to scroll through a list of images. Some are actual photographs, and some are ai-generated. Can you spot which ones are AI? <span className='font-bold'>click on the selected image</span> to find out! </p>
                <div className='flex flex-col items-center text-center text-lg mx-auto py-8'> An image of a robot <img src='robot.png' width={100}></img>means it is AI generated, and a camera <img src='camera.png' width={100}></img>means it wasn&apos;t.</div>
                <p className=' text-center text-lg mx-auto'> You can also generate or upload your own images! Images are generated using <a className='font-bold text-cosee-b' href="https://deepai.org" target='_blank'>DeepAI</a>&apos;s API. </p>
            </div>
        </>
    )
}

export default Cosee