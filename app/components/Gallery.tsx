'use client'

import React from 'react';
import useFirestore from './hooks/useFirestore';
import { useState, useEffect, useRef } from 'react'


const Gallery = () => {
  const { docs, isLoading } = useFirestore('images');

  const [searchInput, setSearchInput] = useState('');
  const [filteredImages, setFilteredImages] = useState<any>([]);

  const handleInput = (e: any) => {
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

  const imageWidth = 250;
  const imageHeight = 300;
  const padX = 10;

  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);
  // Reference to gallery container
  const el = useRef<HTMLDivElement>(null);
  console.log(el);

  const selectImage = (targetIndex: number) => {
    const children = el.current!.children;

    // sets selectedIndex Ref
    // the last part of the conditional makes sure that filterImages will not try to access unavailable image
    if (selectedIndex.current !== -1 && selectedIndex.current < children.length ) { 
      const currentEl = children[selectedIndex.current] as HTMLDivElement;
      currentEl.style.transform = 'scale(1)';
      currentEl.style.zIndex = '0';
    };

    // sets el Ref
    const targetEl = children[targetIndex] as HTMLDivElement;
    if (!targetEl) return;
    targetEl.style.transform = 'scale(1.5)';
    targetEl.style.zIndex = '10';
    selectedIndex.current = targetIndex;

    // update container width
    const galleryWidth = imageWidth + padX;
    el.current!.style.transform = `translateX(calc(50% - ${galleryWidth * targetIndex + galleryWidth * 0.5}px))`
  };

  useEffect(() => {
    selectImage(2);
  });

  return (
    <>
      <div className="searchbar flex justify-center mb-12">
        <input type='text' onChange={handleInput} placeholder='Search images'className='bg-white py-1 rounded-md text-center text-dark' />
      </div>

      <div className='flex transition-all duration-700 h-full ' ref={el}>
        {/* progress bar? */}
        {isLoading && (
          <div className='spinner flex mx-auto justify-center'></div>
        )}
        {!isLoading && !searchInput && docs.map((image: any, index: number) => (

          <div
            key={image.imageUrl}
            className="image-gallery flex duration-700 top-48 bottom-48 ease-out origin-center rounded-lg bg-no-repeat bg-contain bg-center mb-12 cursor-pointer"
            onClick={e => selectImage(index)}
            style={{
              width: imageWidth,
              height: imageHeight,
              boxShadow: '2px 10px 20px -6px rgba(250,250,250,0.95)',
              left: (imageWidth + padX) * index,
              bottom: 200,
              backgroundImage: `url(${image.imageUrl})`,
            }}
          />
        ))}


        {!isLoading && searchInput && filteredImages.map((image: any, index: number) => (

          <div
            key={image.imageUrl}
            className="absolute sahdotransition-all duration-700 top-48 ease-out origin-center rounded-lg bg-no-repeat bg-contain bg-center my-2 cursor-pointer"
            onClick={e => selectImage(index)}
            style={{
              width: imageWidth,
              height: imageHeight,
              boxShadow: '2px 10px 77px -6px rgba(0,0,0,0.85)',
              left: (imageWidth + padX) * index,
              backgroundImage: `url(${image.imageUrl})`
            }}
          />
        ))}
      </div >
    </>
  )
}

export default Gallery