'use client'

import { ChangeEvent } from 'react';

import { SelectImageProps } from '../upload/page';

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
    <div>
      <h1>Upload an Image</h1>
      <input type='file' onChange={fileSelectedHandler} />
      <div className="output">
        {image && (
          <div>
            <img alt="not found" width={'250px'} src={URL.createObjectURL(image)} />
            <br />
            <button onClick={() => { setImage(null); setError('') }}>Remove</button>
          </div>
        )};
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
