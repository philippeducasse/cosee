import React from 'react'
import Navbar from '../components/Navbar'

const Cosee = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col  lg:w-1/2 bg-white bg-opacity-70 mx-auto p-6'>
                <h1 className='text-3xl mx-auto my-12'>Cosee - Agile Produktentwicklung</h1>
                <p className=' text-center mx-auto'>Die cosee GmbH ist ein Software-Unternehmen in Darmstadt. Wir entwickeln seit über zehn Jahren digitale Produkte für Kunden aus allen Branchen und helfen Unternehmen bei ihrem digitalen Geschäftsmodell, dem Product Market Fit und der Umsetzung. Unseren Kunden gefällt dabei besonders, dass wir ihre Sprache und mit ihnen zusammen die Sprache ihrer Kunden verstehen. Wie wir euch dabei helfen, ein gutes digitales Produkt zu bauen.</p>
                <a href='https://www.cosee.biz/'
                    target='_blank'
                    className='mt-5 text-center mx-auto py-2 px-6 w-2/5 self-center my-4 bg-cosee-y rounded-md hover:bg-opacity-70 font-bold'> Zur Cosee Website</a>
            </div>
        </>
    )
}

export default Cosee