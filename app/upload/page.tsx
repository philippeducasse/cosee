'use client'

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
        <div className='bg-white pb-10'>
            <Navbar />
            <div className='flex justify-center align-center'>
                <SelectImage image={image} setImage={setImage} setError={setError} error={error} />
                <TagForm tags={tags} setTags={setTags} />
            </div>
                <UploadButton image={image} setImage={setImage} setError={setError} tags={tags} progress={progress} setProgress={setProgress} />
        </div>
    )
}

export default UploadImage