'use client'

import React from 'react'
import SelectImage from '../components/SelectImage';
import TagForm from '../components/TagForm';
import Gallery from '../components/Gallery';
import UploadButton from '../components/UploadButton';
import { useState } from 'react'

const UploadImage = () => {
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState({
        tag1: '',
        tag2: '',
        tag3: '',
    })

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');

    return (
        <div>
            <SelectImage image={image} setImage={setImage} setError={setError} />
            <TagForm tags={tags} setTags={setTags} />
            <UploadButton image={image} setError={setError} tags={tags}/>
        </div>
    )
}

export default UploadImage