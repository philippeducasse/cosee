'use client'

import React, { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { GalleryProps } from '../page';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import Image from 'next/image';

const Gallery: FC<GalleryProps> = ({filteredImages, isLoading}) => {
  console.log(filteredImages)
  const [flippedImages, setFlippedImages] = useState<{ [key: number]: boolean }>({});
  const imageWidth = typeof window !== 'undefined' && window.innerWidth < 500 ? 150 : 250;
  const imageHeight = typeof window !== 'undefined' && window.innerWidth < 500 ? 200 : 300;

  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);
  // Reference to gallery container
  const galleryContainer = useRef<HTMLDivElement>(null);

  const selectImage = (targetIndex: number) => {
    const children = galleryContainer.current!.children;

    // resets styles for previously selected images
    if (selectedIndex.current !== -1 && selectedIndex.current < children.length) {
      const currentgalleryImage = children[selectedIndex.current] as HTMLDivElement;
      currentgalleryImage.style.transform = 'scale(1)';
      currentgalleryImage.style.zIndex = '0';
      currentgalleryImage.classList.remove('flip')
    };
    // set style for new selected image
    let targetGalleryImage = children[targetIndex] as HTMLDivElement;
    if (!targetGalleryImage) return;
    targetGalleryImage.style.transform = 'scale(1.5)';
    targetGalleryImage.style.zIndex = '10';
    // updated selectedIndex with current targetIndex
    selectedIndex.current = targetIndex;
    // update container width
    galleryContainer.current!.style.transform = `translateX(calc(50% - ${imageWidth * targetIndex + imageWidth * 0.4}px))`
    
    setFlippedImages({})
  };


  const flipImage = (event:any, index:number) => {
    event.preventDefault(); // Prevent default action
    const flipContainers = Array.from(galleryContainer.current!.children);
    const cardContainer = flipContainers[index];
        if (!flippedImages[index]) {
          cardContainer!.classList.add("flip");
          setFlippedImages((prev) => ({
            ...prev,
            [index]: true,
          }));
        } else {
          cardContainer!.classList.remove("flip");
          
          setFlippedImages((prev) => ({
            ...prev,
            [index]: false,
          }));
        }};

  useEffect(() => {
    {
      filteredImages.length > 0 && filteredImages.length < 3
        ? selectImage(0)
        : selectImage(2);
    }
  }, [filteredImages]);

  return (
    
      
      <div
        className="container flex transition-all duration-700 h-full"
        ref={galleryContainer}
      >
        {isLoading && (
          <div className="spinner flex mx-auto justify-center"></div>
        )}

        {!isLoading &&
          filteredImages.map((image: any, index: number) => (
            // CARD
            <div
              key={image.imageUrl}
              className="card flex sm:w-3/4 sm:h-auto my-16"
              onClick={(image) => {
                if (selectedIndex.current !== index) {
                  console.log(image);
                  selectImage(index);
                } else {
                  flipImage(image, index);
                }
              }}
            >
              {/* FRONT */}
              <div
                className="front rounded-lg bg-no-repeat bg-white bg-cover bg-center cursor-pointer "
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  backgroundImage: `url(${image.imageUrl})`,
                }}
              />
              {/* BACK */}
              <div className="back absolute  rounded-lg bg-no-repeat bg-white bg-center cursor-pointer p-2" style={{
                    width: imageWidth,
                    height: imageHeight,
                  }}>
                <div 
                  className="details flex items-center justify-center flex-col mx-auto h-full"
                >
                  {image.ai == 'true'? (
                    <Image src="/robot.png" height={150} width={150} alt="AI Generated" className=''/>
                  ) : (
                    <Image src="/camera.png" height={150} width={150} alt="Human Generated" />
                  )}
                  <div>
                    <p className='text-lg text-center'>Tags: </p>
                    <p className="tags text-sm text-center py-2"> {image.tags[0]}, {image.tags[1]}, {image.tags[2]}</p>
                  </div>
                  {/* <button
                    className="delete-btn"
                    onClick={async () =>
                      await deleteDoc(doc(db, "images", image.title))
                    }
                  >
                    X
                  </button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
  );
}

export default Gallery