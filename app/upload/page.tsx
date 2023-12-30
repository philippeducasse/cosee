'use client'

import React from 'react'
import SelectImage from '../components/SelectImage';
import TagForm from '../components/TagForm';
import UploadButton from '../components/UploadButton';
import { useState } from 'react';


// export allows us to define types only once and reuse them in other components
export type Image = {
    name: string,
    imageURL: string,
    createdAt: string,
    tags: [string, string, string] // this is specific for wanting a tuple of three strings (which we want)
    // otherwise you would use the usual 'string[]'
}


export type UploadButtonProps = {
    image: Image | null ;
    tags: {tag1: string, tag2: string, tag3: string}
    progress: number;
    setError: React.Dispatch<React.SetStateAction<string | any>>;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
  }

export type SelectImageProps = {
    image: any | Blob;
    error: string;
    setImage: React.Dispatch<React.SetStateAction<File | any>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
  }

export type TagFormProps = {
    tags:{tag1: string, tag2: string, tag3: string};
    setTags: React.Dispatch<React.SetStateAction<{tag1: string, tag2: string, tag3: string} | any>>;
}

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
        <div>
            <SelectImage image={image} setImage={setImage} setError={setError} error= {error}/>
            <TagForm tags={tags} setTags={setTags} />
            <UploadButton image={image} setError={setError} tags={tags} progress={progress} setProgress={setProgress} />
        </div>
    )
}

export default UploadImage