'use client'

import React from 'react';
import useFirestore from './hooks/useFirestore';
import { useState, useEffect } from 'react'


const Gallery = () => {
  const { docs, isLoading } = useFirestore('images');

  const [searchInput, setSearchInput] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  const handleInput = (e) => {
    e.preventDefault
    setSearchInput(e.target.value)
    
  }

  useEffect(() => {
    const searchByTags = () => {
      // here we use the some method to return images which tags contain a partial instance of the searchInput
      setFilteredImages(docs.filter((image) => image.tags.some((tag) => tag.includes(searchInput))))
    }
    searchByTags();
  }, [searchInput])

  console.log(docs);
  // insert progress bar here if isloading is true
  return (

    <div className='image-gallery grid grid-cols-3'>
      {/* progress bar? */}
      {isLoading && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
      )}
      {!searchInput && docs.map((image: any) => (

        <div key={image.imageUrl} className="">
          <figure className='grid-item'>
            <img src={image.imageUrl} alt="" width={300} height={300} />
          </figure>
        </div>
      ))}


      {searchInput && filteredImages.map((image: any) => (

        <div key={image.imageUrl} className="">
          <figure>
            <img src={image.imageUrl} alt="" width={300} height={300} />
          </figure>
        </div>


      ))}
      <div className="searchbar">
        <input type='text' onChange={handleInput}>
        </input>
      </div>

    </div >
  )
}

export default Gallery