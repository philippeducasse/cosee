'use client'

import { ChangeEvent } from 'react';

import { SelectImageProps } from '../page';

const SelectImage: React.FC<SelectImageProps> = ({ image,generatedImage, error, setImage, setError }) => {

  const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage && (selectedImage.type.includes('img') || selectedImage.type.includes('image'))) {
      setImage(selectedImage);
      setError('');
    } else {
      setImage(null);
      setError('Please select an image');
    }
  };

  return (
    <div className="w-3/5 mx-auto flex flex-col">
      <div className="w-full h-20 mt-12 text-center content-center">
        <input
          className="w-50 mt-4 text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-cyan-50 file:text-blue-700
        hover:file:bg-blue-100"
          type="file"
          onChange={fileSelectedHandler}
        />
      </div>
      
       
      </div>
  );
};

export default SelectImage;
