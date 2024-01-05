'use client'

import { ChangeEvent } from 'react';

import { SelectImageProps } from '../page';

const SelectImage: React.FC<SelectImageProps> = ({ image, error, setImage, setError }) => {

  const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage && (selectedImage.type.includes('img') || selectedImage.type.includes('image'))) {
      setImage(selectedImage);
      setError('');
    } else {
      setImage(null);
      setError('Please select an image file');
    }
  };

  return (
    <div className='w-50 mx-auto flex flex-col'>
      <div className="w-full h-20 bg-blue-500 mt-12">

        <h1 className='text-center text-2xl'>Upload an Image</h1>
      </div>
      <input className='block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-green-50 file:text-green-700
        hover:file:bg-green-100'
        type='file' onChange={fileSelectedHandler} />
      <div className="output">
        {image && (
          <div>
            <img alt="not found" width={'250px'} src={URL.createObjectURL(image)} />
            <br />
            <button className='block w-full text-sm text-slate-500
              mr-4 py-2 px-4 rounded-md
              border-0 text-sm font-semibold
            bg-green-50 text-green-700
              hover:bg-green-100'
              onClick={() => { setImage(null); setError('') }}>Remove</button>
          </div>
        )}
        <div>
          {error && (

            <p className='error'>{error}</p>

          )}
        </div>
      </div>
    </div>
  );
};

export default SelectImage;
