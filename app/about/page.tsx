import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const about = () => {
    return ( 
        <div>
            <Navbar />
            <section className='block lg:w-1/2 mx-auto p-8 bg-white bg-opacity-70'>
                <h1 className='text-center text-3xl'>Hello! My name is Philippe Ducasse</h1>
                <Image src= '/Neutral2.jpg' width={200} height={200} className='rounded-full mx-auto my-10' alt='Philippe Photo'/>
                <article>
                    <p className="text-xl">
                    I hope you enjoyed using this little app. You can find the code for it on my <a href='https://github.com/philippeducasse/cosee' target='_blank' className='text-blue-800 font-bold'>GitHub</a>,
                    and you can have a look at more of my work on my  <a href='https://philippeducasse.github.io/portfolio/' target='_blank' className='text-blue-800 font-bold'> Portfolio website</a>.
                    </p>
                    
                </article>
            </section>

        </div>
    )
}

export default about