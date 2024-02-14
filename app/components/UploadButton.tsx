import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../firebase/config';
import ProgressBar from './ProgressBar';
import { UploadButtonProps, Image } from '../page';


const UploadButton: React.FC<UploadButtonProps> = ({ image, setImage, setError, setTags, tags, progress, setProgress, imageTitle, generatedImage, setGeneratedImage}) => {
  const uploadImage = async (image: Image | any, generatedImage: string | any) => {
    console.log(image, generatedImage)
    try {
      let response;
      if (generatedImage){
        response= await fetch(generatedImage)
      }
      if (image){
      response = await fetch(URL.createObjectURL(image));
      }
      const storageRef = ref(storage, imageTitle);
      const blob = await response!.blob();
      const uploadTask = uploadBytesResumable(storageRef, blob);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // transform uploaded bytes into a percentage
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(percentage)
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
            console.log({imageTitle})
            console.log({tags})
            // Now that you have the URL, add it to Firestore or perform any required actions
            const imageCollection = {
              imageUrl: imageUrl,
              createdAt: new Date(), 
              tags: tags,
            };
            await addDoc(collection(db, 'images'), imageCollection);
            setImage(null);
            setGeneratedImage(null)
            setProgress(0);
            setTags({tag1:'', tag2:'', tag3:''})
            console.log('File has been uploaded successfully and added to Firestore');
          } catch (error:any) {
            setError(error.Error);
          }
        }
      );
    } catch (error:any) {
      setError(error.Error);
    }
  };
  
  const handleSubmit = () => {
    uploadImage(image, generatedImage)
  }

  return (
    <div className='flex flex-col justify-center '>
      <button className= 'py-2 px-6 lg:w-1/5 self-center my-4 bg-cosee-y rounded-md hover:bg-opacity-70 font-bold'
      onClick={handleSubmit}>Hochladen</button>
      {image && <ProgressBar progress = {progress}/>}
    </div>
  );
};

export default UploadButton;
