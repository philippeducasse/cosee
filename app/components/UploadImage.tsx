'use client'

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

// axios image handler
import axios from 'axios';

const UploadImage = () => {

  const [image, setImage] = useState(null)
  const [error, setError] = useState('')

  const fileSelectedHandler = (event: any) => {
    let selected = event.target.files[0]
    if (selected && selected.includes('img') || selected.includes('image')) {
      setImage(event.target.files[0]);
      setError('');
    }
    else {
      setImage(null)
      setError('Please select an image file')
    }
  }
  // Upload Image to firebase
  const imageUploadHandler = (image: any) => {
  }

  return (
    <div>
      <h1>Lade eine Bild Hoch</h1>
      <input
        type='file'
        onChange={fileSelectedHandler}
      />
      <div className="output">
        {image && (
          <div>
            <img
              alt="not found"
              width={'250px'}
              src={URL.createObjectURL(image)}
            />
            <br />
            <button onClick={() => { setImage(null); setError('') }}>Remove</button>
          </div>
        )}
        {error && (
          <p className='error'>{error}</p>
        )}
      </div>
    </div>
  )
}

export default UploadImage