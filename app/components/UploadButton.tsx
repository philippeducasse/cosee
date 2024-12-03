import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import { collection, setDoc, doc, addDoc } from 'firebase/firestore';
import { storage, db } from '../firebase/config';
import ProgressBar from './ProgressBar';
import { UploadButtonProps, ImageType } from '../Types';


const UploadButton = ({ image, setImage, setError,
  setTags, tags, progress, setProgress,
  setUploadSuccess, generatedImage, setGeneratedImage
}: UploadButtonProps
) => {
  const uploadImage = async (image: ImageType | any, generatedImage: string) => {
    try {
      let response;
      let storageRef;
      if (generatedImage) {
        response = await fetch(generatedImage)
        storageRef = ref(storage, generatedImage.split('/')[3]);
      }
      if (image) {
        response = await fetch(URL.createObjectURL(image));
        storageRef = ref(storage, image.name);
      }
      const blob = await response!.blob();
      const uploadTask = uploadBytesResumable(storageRef!, blob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // transform uploaded bytes into a percentage
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(percentage)
        },
        (error) => {
          setError(`${error}`);
        },
        async () => {
          // Once the upload is complete
          try {
            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
            console.log(imageUrl);
            // Now that you have the URL, add it to Firestore or perform any required actions
            const imageCollection = {
              imageUrl: imageUrl,
              createdAt: new Date(),
              tags: tags,
              ai: !!generatedImage
            };
            await addDoc(collection(db, 'images'), imageCollection);
            setImage(null);
            setGeneratedImage('')
            setProgress(0);
            setTags({ tag1: '', tag2: '', tag3: '' })
            console.log('File has been uploaded successfully and added to Firestore');
            setUploadSuccess(true);
          } catch (error: any) {
            setError(error.Error);
          }
        }
      );
    } catch (error: any) {
      setError(error.Error);
    }
  };

  const handleSubmit = () => {
    if (!tags.tag1 || !tags.tag2 || !tags.tag3) {
      setError('Please give your image three tags!')
    }
    else if (!image && !generatedImage) {
      setError('Please select or generate an image!')
    } else {
      uploadImage(image, generatedImage)
      setError('')
    }
  }

  return (
    <div className='flex flex-col justify-center '>
      <button className='py-3 px-8 self-center my-4 bg-cosee-b text-white text-xl rounded-md hover:bg-opacity-90 font-bold'
        onClick={handleSubmit}>Upload</button>
      {image && <ProgressBar progress={progress} />}
    </div>
  );
};

export default UploadButton;
