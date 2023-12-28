'use client'

import React, { useState, useEffect } from 'react';

const SelectImage = ({ image, setImage, setError }) => {
  // const [image, setImage] = useState(null);
  // const [progress, setProgress] = useState(0);
  // const [error, setError] = useState('');
  // const [url, setUrl] = useState('');

  // useEffect(() => {
  //   if (url) {
  //     console.log('Upload complete');
  //   }
  // }, [url]);

  const fileSelectedHandler = (event: any) => {
    const selectedImage = event.target.files[0];
    console.log({ selectedImage })
    if (selectedImage && (selectedImage.type.includes('img') || selectedImage.type.includes('image'))) {
      setImage(selectedImage);
      setError('');
    } else {
      setImage(null);
      setError('Please select an image file');
    }
  };


  // const uploadImage = async (image: any) => {
  //   try {
  //     console.log({image})

  //     // ref for storage
  //     const storageRef = ref(storage, image.name);
  //     //ref for collection
  //     const response = await fetch(URL.createObjectURL(image));
  //     // Converts image to Blob format
  //     const blob = await response.blob();
  //     const uploadTask = uploadBytesResumable(storageRef, blob);

  //     uploadBytes(storageRef, blob).then(() => {
  //       console.log('File has been uploaded successfully');
  //         let imageCollection = {

  //         }
  //         addDoc(collection(db, 'images'), imageCollection)

  //     });

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         setProgress(percentage);
  //       },
  //       (error) => {
  //         setError(error.message);
  //       },
  //       async () => {
  //         const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
  //         setUrl(imageUrl);
  //       }
  //     );
  //   } catch (error:any) {
  //     setError(error.message);
  //   }
  // };


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
        )}
        {/* {error && (
          <p className='error'>{error}</p>
        )}
        {progress > 0 && <p>Progress: {progress}%</p>}
      </div>
      {url && <p>Image uploaded successfully!</p>} */}
      </div>
    /</div>
  );
};

export default SelectImage;
