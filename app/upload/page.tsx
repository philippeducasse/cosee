'use client';
import React from 'react'
import SelectImage from '../components/SelectImage';
import TagForm from '../components/TagForm';
import UploadButton from '../components/UploadButton';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import GenerateButton from '../components/GenerateButton';
import DisplayImage from '../components/DisplayImage';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState({
    tag1: "",
    tag2: "",
    tag3: "",
  });
  const [imageTitle, setImageTitle] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [progress, setProgress] = useState<number>(0);
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState("");

  return (
    <div className="pb-10">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center align-center lg:mx-32 bg-white bg-opacity-70 ">
        <SelectImage
          image={image}
          generatedImage={generatedImage}
          setImage={setImage}
          setError={setError}
          error={error}
        />
        <TagForm
          tags={tags}
          setTags={setTags}
          imageTitle={imageTitle}
          setImageTitle={setImageTitle}
        />
      </div>
      <DisplayImage
        image={image}
        generatedImage={generatedImage}
        setGeneratedImage={setGeneratedImage}
        setImage={setImage}
        setError={setError}
      />
      <UploadButton
        image={image}
        generatedImage={generatedImage}
        setGeneratedImage={setGeneratedImage}
        setImage={setImage}
        setError={setError}
        tags={tags}
        setTags={setTags}
        progress={progress}
        setProgress={setProgress}
        imageTitle={imageTitle}
        setImageTitle={setImageTitle}
      />
      <GenerateButton
        generatedImage={generatedImage}
        setGeneratedImage={setGeneratedImage}
        tags={tags}
        setError={setError}
        generating={generating}
        setGenerating={setGenerating}
      />
      {generating && (
        <div className='flex mx-auto justify-center'>
          <p>Generating image...</p>
          <div className="spinner flex mx-auto justify-center"></div>
        </div>
      )}
    </div>
  );
}

export default UploadImage