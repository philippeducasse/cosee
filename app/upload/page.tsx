'use client';
import React from 'react'
import SelectImage from '../components/SelectImage';
import TagForm from '../components/TagForm';
import UploadButton from '../components/UploadButton';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import GenerateButton from '../components/GenerateButton';
import DisplayImage from '../components/DisplayImage';
import ProgressBar from '../components/ProgressBar';

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
    <div className="">
      <Navbar />

      <div className="flex flex-col items-center justify-evenly lg:mx-32 bg-white bg-opacity-70 pb-8">
        <h1 className="text-center text-lg lg:text-4xl mt-12 mx-4">Generate an image or upload it from your files</h1>

        <div className="">
          <SelectImage
            image={image}
            generatedImage={generatedImage}
            setImage={setImage}
            setError={setError}
            error={error}
          />
          <DisplayImage
            image={image}
            generatedImage={generatedImage}
            setGeneratedImage={setGeneratedImage}
            setImage={setImage}
            setError={setError}
          />
        </div>
        <div className="flex  flex-col md:flex-row justify-evenly w-full">
          <TagForm
            tags={tags}
            setTags={setTags}
            imageTitle={imageTitle}
            setImageTitle={setImageTitle}
          />
          <div>
            {error && (
              <p className="block text-red-400 font-bold text-center text-xl bg-white bg-opacity-70 mb-3">
                {error}
              </p>
            )}
          </div>
              <div className="flex flex-col h-full items-center my-auto">
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

          {!image && (
            <GenerateButton
              generatedImage={generatedImage}
              setGeneratedImage={setGeneratedImage}
              tags={tags}
              setError={setError}
              generating={generating}
              setGenerating={setGenerating}
            />
          )}
          {generating && (
            <div className="">
              <p className="text-center text-xl w-full mx-auto">
                Generating image...
              </p>
              <div className="spinner flex mx-auto justify-center mt-6"></div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadImage