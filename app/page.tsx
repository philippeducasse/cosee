'use client';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import useFirestore from './components/hooks/useFirestore';
import SearchBar from './components/SearchBar';


// export allows us to define types only once and reuse them in other components
export type Image = {
  name: string,
  imageURL: string,
  createdAt: string,
  tags: [string, string, string] // this is specific for wanting a tuple of three strings (which we want)
  // otherwise you would use the usual 'string[]'
}


export type UploadButtonProps = {
  image: Image | null;
  tags: { tag1: string, tag2: string, tag3: string }
  progress: number;
  setError: React.Dispatch<React.SetStateAction<string | any>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setImage: React.Dispatch<React.SetStateAction<File | any>>;
  setTags: React.Dispatch<React.SetStateAction<{ tag1: string, tag2: string, tag3: string } | any>>;

}

export type SelectImageProps = {
  image: any | Blob;
  error: string;
  setImage: React.Dispatch<React.SetStateAction<File | any>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
//

export type TagFormProps = {
  tags: { tag1: string, tag2: string, tag3: string };
  setTags: React.Dispatch<React.SetStateAction<{ tag1: string, tag2: string, tag3: string } | any>>;
}

export type SearchBarProps = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export type GalleryProps = {
  filteredImages: any [];
  isLoading: boolean;
}

const HomePage = () => {

  const [searchInput, setSearchInput] = useState('');
  const { docs, isLoading } = useFirestore('images');
  const [filteredImages, setFilteredImages] = useState<any>([]);

  useEffect(() => {
    if (searchInput) {
      const filtered = docs.filter((image) =>
        image.tags.some((tag) =>
          tag.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages(docs);
    }
  }, [docs, searchInput]);

  return (
    <div className='w-screen h-screen flex flex-col items-center overflow-x-clip'>
      <Navbar />
      <div className='mt-12 pb-20'>
        <SearchBar setSearchInput = {setSearchInput}/>
        <Gallery filteredImages={filteredImages} isLoading={isLoading}/>
      </div>
    </div>
  )
}

export default HomePage
