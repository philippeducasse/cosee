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
  const [image, setImage] = useState<File | null>(null);
  const [tags, setTags] = useState({
    tag1: "",
    tag2: "",
    tag3: "",
  });
  const [generatedImage, setGeneratedImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false)

  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col items-center justify-evenly lg:mx-32 bg-white bg-opacity-70 pb-8">
        <div className="text-center  mt-12 mx-4">
          <h3 className="text-xl lg:text-4xl mb-6">
            Generate an image or upload one from your files
          </h3>
          <p className="text-md lg:text-2xl px-4">
            To generate an image using AI, first choose three tags, and then
            press &quot;generate&quot;. Once the image has generated, click &quot;upload&quot;. Your
            Image will then appear in the gallery!
          </p>
          <p className="text-md lg:text-2xl mt-8 px-4">
            You can also just upload your own image from your device. For that,
            click the &quot;browse&quot; button and choose a JPG or PNG image. Then give
            your image three tags, and then press &quot;upload&quot;. Your Image will then
            appear in the gallery!
          </p>
        </div>

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
            setUploadSuccess={setUploadSuccess}
          />

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
              setUploadSuccess={setUploadSuccess}
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
      <div>
        {error && (
          <p className="block text-red-400 font-bold text-center w-full text-xl bg-white bg-opacity-70 mb-3">
            {error}
          </p>
        )}
        {uploadSuccess && (
          <p className="block text-blue-700 font-bold text-center w-full text-xl bg-white bg-opacity-70 mb-3">
            Image uploaded successfully, now check the gallery!
          </p>
        )}
      </div>
    </div>
  );
}

export default UploadImage