'use client'

import React, { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { GalleryProps } from '../page';

const Gallery: FC<GalleryProps> = ({filteredImages, isLoading}) => {

  const [flipped, setFlipped] = useState<boolean >(false);
  const imageWidth = typeof window !== 'undefined' && window.innerWidth < 500 ? 150 : 250;
  const imageHeight = typeof window !== 'undefined' && window.innerWidth < 500 ? 200 : 300;

  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);
  // Reference to gallery container
  const galleryImage = useRef<HTMLDivElement>(null);

  const selectImage = (targetIndex: number) => {
    const children = galleryImage.current!.children;

    // resets styles for previously selected images
       if (selectedIndex.current === targetIndex) {
      // Toggle flip state for the image
      setFlipped(prev => ({
        ...prev,
        [targetIndex]: !prev[targetIndex]
      }));
      return;
    }
    


    if (selectedIndex.current !== -1 && selectedIndex.current < children.length) {
      const currentgalleryImage = children[selectedIndex.current] as HTMLDivElement;
      currentgalleryImage.style.transform = 'scale(1)';
      currentgalleryImage.style.zIndex = '0';
      currentgalleryImage.style.backgroundColor='#fff';

    };

    // set style for new selected image

    let targetGalleryImage = children[targetIndex] as HTMLDivElement;
    if (!targetGalleryImage) return;
    targetGalleryImage.style.transform = 'scale(1.5)';
    targetGalleryImage.style.zIndex = '10';
   
 
    // updated selectedIndex with current targetIndex
    selectedIndex.current = targetIndex;

    // update container width
    galleryImage.current!.style.transform = `translateX(calc(50% - ${imageWidth * targetIndex + imageWidth * 0.4}px))`
  };
  const flipImage = (image) => {
    if (!flipped){
      console.log(image.target)
      image.target.classList.add('back')
      console.log(flipped)
      console.log('show back')
    
      // setFlipped(true);
      ;
    } else {
      image.target.classList.remove('back')

      console.log('showfront')
      // setFlipped(false)
  }}

  useEffect(() => {
    { filteredImages.length > 0 && filteredImages.length < 3 ? selectImage(0) : selectImage(2) };
  }, [filteredImages]);

  console.log(flipped)

  return (
    <>
      <div
        className="flex transition-all duration-700 h-full"
        ref={galleryImage}
      >
        {isLoading && (
          <div className="spinner flex mx-auto justify-center"></div>
        )}

        {!isLoading &&
          filteredImages.map((image: any, index: number) => (
            <div
              key={image.imageUrl}
              className="image-gallery w-full sm:w-3/4 sm:h-auto flex duration-700 ease-out origin-center rounded-lg bg-no-repeat bg-white bg-contain bg-center mb-12 cursor-pointer"
              onClick={(image) => {
                if (selectedIndex.current != index) {
                  selectImage(index);
                  setFlipped(false)
                } 
                else {
                  setFlipped(!flipped);
                  flipImage(image);
                }
              }}
              style={{
                width: imageWidth,
                height: imageHeight,
                boxShadow: "10px 10px 20px -2px rgba(0,0,0,0.85)",
                backgroundImage: `url(${image.imageUrl})`,
              }}
            />
          ))}
      </div>
      {flipped && <p>flip image</p>}
    </>
  );
}

export default Gallery