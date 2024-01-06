import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

// export allows us to define types only once and reuse them in other components
export type Image = {
  name: string,
  imageURL: string,
  createdAt: string,
  tags: [string, string, string] // this is specific for wanting a tuple of three strings (which we want)
  // otherwise you would use the usual 'string[]'
}


export type UploadButtonProps = {
  image: Image | null ;
  tags: {tag1: string, tag2: string, tag3: string}
  progress: number;
  setError: React.Dispatch<React.SetStateAction<string | any>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setImage: React.Dispatch<React.SetStateAction<File | any>>;

}

export type SelectImageProps = {
  image: any | Blob;
  error: string;
  setImage: React.Dispatch<React.SetStateAction<File | any>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export type TagFormProps = {
  tags:{tag1: string, tag2: string, tag3: string};
  setTags: React.Dispatch<React.SetStateAction<{tag1: string, tag2: string, tag3: string} | any>>;
}
const HomePage = () => {


  return (
    <div className='w-screen h-screen flex flex-col items-center overflow-x-clip'>
      <Navbar />
      <div className='mt-12 pb-20'>
        <Gallery />
      </div>
    </div>
  )
}

export default HomePage
