'use client'

import React from 'react';
import { useState, useRef} from 'react';

// axios image handler
import axios from 'axios';

const UploadImage = () => {

  const fileInput = useRef(null);
  const [image, setImage] = useState(null)

  const fileSelectedHandler = (event: any) => {
    setImage(event.target.files[0]);
  }

  // Upload Image to firebase
  const imageUploadHandler = (image: any) => {
    // default JS object for creating forms
    const fd = new FormData;
    fd.append('image', image, image.name)
    axios.post('firebaseDBURL.com', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent?.total * 100) + '%');
      }
    })
      .then(res => {
        console.log(res);
      })
      ;
  }

  return (
    <div>
      <h1>Lade eine Bild Hoch</h1>
      <input
        style={{ display: 'none' }}
        type='file'
        onChange={fileSelectedHandler}
        ref= {fileInput}
      />
      <button onClick={()=> fileInput.current?.click()}>Wähle ein Bild</button>
      <button onClick={imageUploadHandler}></button>
    </div>
  )
}

export default UploadImage