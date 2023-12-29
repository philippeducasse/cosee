import React, { useEffect, useState} from 'react';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../firebase/config';

const UploadButton = ({ image, setError, tags }) => {
  const [url, setUrl] = useState('');

  type Image = {
    name: string,
    imageURL: string,
    createdAt: string,
    tags: [string, string, string] // this is specific for wanting a tuple of three strings (which we want)
    // otherwise you would use the usual 'string[]'
}

  const uploadImage = async (image: Image | any) => {
    try {
      const storageRef = ref(storage, image.name);
      const response = await fetch(URL.createObjectURL(image));
      const blob = await response.blob();
      const uploadTask = uploadBytesResumable(storageRef, blob);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle upload progress here if needed
        },
        (error) => {
          // Handle any errors during upload
          setError(error);
        },
        async () => {
          // Once the upload is complete
          try {
            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
            console.log(imageUrl);
            setUrl(imageUrl); // Update URL state here
            console.log({tags})
            // Now that you have the URL, add it to Firestore or perform any required actions
            const imageCollection = {
              imageUrl: imageUrl,
              createdAt: new Date(), 
              tags: tags,
            };
            await addDoc(collection(db, 'images'), imageCollection);
            console.log('File has been uploaded successfully and added to Firestore');
          } catch (error) {
            setError(error);
          }
        }
      );
    } catch (error) {
      setError(error);
    }
  };
  

  const handleSubmit = () => {
    uploadImage(image)
  }

  return (
    <div>
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default UploadButton;
