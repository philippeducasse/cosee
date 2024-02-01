'use client';
import React from 'react'
import SelectImage from '../components/SelectImage';
import TagForm from '../components/TagForm';
import UploadButton from '../components/UploadButton';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const UploadImage = () => {

    const [image, setImage] = useState(null);
    const [tags, setTags] = useState({
        tag1: '',
        tag2: '',
        tag3: '',
    })
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState('');


    return (
        <div className='pb-10'>
            <Navbar />
            <div className='flex flex-col lg:flex-row justify-center align-center lg:mx-32 bg-white bg-opacity-70 '>
                <SelectImage image={image} setImage={setImage} setError={setError} error={error} />
                <TagForm tags={tags} setTags={setTags} />
            </div>
                <UploadButton image={image} setImage={setImage} setError={setError} tags={tags} setTags={setTags} progress={progress} setProgress={setProgress} />
        </div>
    )
}

export default UploadImage