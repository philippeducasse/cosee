'use client';
import {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import useFirestore from './components/hooks/useFirestore';

const HomePage = () => {

  const [searchInput, setSearchInput] = useState<string>('');
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
    <div className="w-screen flex flex-col items-center overflow-x-clip">
      <Navbar setSearchInput={setSearchInput}/>
      <div className="mt-12 pb-20">
        <Gallery filteredImages={filteredImages} isLoading={isLoading} />
      </div>
    </div>
  );
}
export default HomePage
