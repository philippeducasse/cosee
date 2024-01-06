import React from 'react'
import Navbar from '../components/Navbar'

const about = () => {
    return (
        <div>
            <Navbar />
            <section className='block w-1/2 mx-auto p-8'>
                <h1 className='text-center text-3xl'>Hallo, ich heisse Philippe Ducasse</h1>
                <img src= '/Neutral2.jpg' width={200} height={200} className='rounded-full mx-auto my-10'/>
                <article>
                    <p className="">
                    Ich hoffe, dass Ihnen diese kleine App, die ich gebaut habe, 
                    gefallen hat. Sie können den Code dafür auf meinem <a href='https://github.com/philippeducasse/cosee' target='_blank' className='text-blue-800 font-bold'>GitHub</a> finden,
                    und Sie können mehr Informationen über mich und andere frühere Projekte
                    auf meiner <a href='https://philippeducasse.github.io/portfolio/' target='_blank' className='text-blue-800 font-bold'> Portfolio </a> Website finden.
                    </p>
                    
                </article>
            </section>

        </div>
    )
}

export default about