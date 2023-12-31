'use client'

import React, { FC } from 'react';
import { useEffect, useRef } from 'react';
import { GalleryProps } from '../page';

const Gallery: FC<GalleryProps> = ({filteredImages, isLoading}) => {

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
    if (selectedIndex.current !== -1 && selectedIndex.current < children.length) {
      const currentEl = children[selectedIndex.current] as HTMLDivElement;
      currentEl.style.transform = 'scale(1)';
      currentEl.style.zIndex = '0';
    };

    // sets el Ref
    let targetEl = children[targetIndex] as HTMLDivElement;
    if (!targetEl) return;
    targetEl.style.transform = 'scale(1.5)';
    targetEl.style.zIndex = '10';
    if (children.length < 3) {
      selectedIndex.current = 0
    }

    selectedIndex.current = targetIndex;

    // update container width
    const galleryWidth = imageWidth + padX;
    el.current!.style.transform = `translateX(calc(50% - ${galleryWidth * targetIndex + galleryWidth * 0.4}px))`
  };

  useEffect(() => {
    { filteredImages.length > 0 && filteredImages.length < 3 ? selectImage(0) : selectImage(2) };
  }, [filteredImages]);

  return (
    <>
      <div className='flex transition-all duration-700 h-full ' ref={el}>
        {/* progress bar? */}
        {isLoading && (
          <div className='spinner flex mx-auto justify-center'></div>
        )}
        
        {!isLoading && filteredImages.map((image: any, index: number) => (

          <div
            key={image.imageUrl}
            className="image-gallery w-full flex duration-700 ease-out origin-center rounded-lg bg-no-repeat bg-white bg-contain bg-center mb-12 cursor-pointer"
            onClick={e => selectImage(index)}
            style={{
              width: imageWidth,
              height: imageHeight,
              boxShadow: '10px 10px 20px -2px rgba(0,0,0,0.85)',
              backgroundImage: `url(${image.imageUrl})`
            }}
          />
        ))}
      </div >
    </>
  )
}

export default Gallery