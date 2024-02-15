'use client'

import React, { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { GalleryProps } from '../page';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';

const Gallery: FC<GalleryProps> = ({filteredImages, isLoading}) => {
  console.log(filteredImages)
  const [flippedImages, setFlippedImages] = useState<{ [key: number]: boolean }>({});
  const imageWidth = typeof window !== 'undefined' && window.innerWidth < 500 ? 150 : 250;
  const imageHeight = typeof window !== 'undefined' && window.innerWidth < 500 ? 200 : 300;

  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);
  // Reference to gallery container
  const galleryImage = useRef<HTMLDivElement>(null);

  const selectImage = (targetIndex: number) => {
    const children = galleryImage.current!.children;

    // resets styles for previously selected images
    if (selectedIndex.current !== -1 && selectedIndex.current < children.length) {
      const currentgalleryImage = children[selectedIndex.current] as HTMLDivElement;
      currentgalleryImage.style.transform = 'scale(1)';
      currentgalleryImage.style.zIndex = '0';
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

    Array.from(children).forEach((container: Element) => {
      const imageElement = container.querySelector('.image-gallery')
      imageElement!.classList.remove('back');
      const detailsElement = container.querySelector('.details')
      detailsElement!.classList.add('hidden');

    });

    setFlippedImages({})
  };


  const flipImage = (image:any, index:number) => {
    const flipContainers = Array.from(galleryImage.current!.children);
    const targetFlipContainer = flipContainers[index];
    const details = targetFlipContainer.querySelector('.details');
        if (!flippedImages[index]) {
          details!.classList.remove("hidden");
          image.target.classList.add("back");
          image.target.classList.remove("front");

          setFlippedImages((prev) => ({
            ...prev,
            [index]: true,
          }));
        } else {
          image.target.classList.remove("back");
          image.target.classList.add("front");
          details!.classList.add("hidden");
          
          setFlippedImages((prev) => ({
            ...prev,
            [index]: false,
          }));
        }};

  const deleteImage = async() => {
    
    
  } 

  useEffect(() => {
    { filteredImages.length > 0 && filteredImages.length < 3 ? selectImage(0) : selectImage(2) };
  }, [filteredImages]);





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
              className="flipper relative"
              onClick={(image) => {
                if (selectedIndex.current !== index) {
                  console.log(image)
                  selectImage(index);
                } else {
                  flipImage(image, index);
                }
              }}
            >
              <div
                className="image-gallery front w-full sm:w-3/4 sm:h-auto flex duration-700 ease-out origin-center rounded-lg bg-no-repeat bg-white bg-contain bg-center mb-12 cursor-pointer"
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  boxShadow: "10px 10px 20px -2px rgba(0,0,0,0.85)",
                  backgroundImage: `url(${image.imageUrl})`,
                }}
              />
              <div className="details hidden absolute">
                {image.ai ? (
                  <img src="/robot.png" width={100} alt="AI Generated" />
                ) : (
                  <img src="/public/human.png" alt="Human Generated" />
                )}
                <div>
                  <ul className="">{image.tags[0]}</ul>
                  <ul className="">{image.tags[1]}</ul>
                  <ul className="">{image.tags[2]}</ul>
                </div>
                <button className='delete-btn'onClick={async() => await deleteDoc(doc(db,'images', image.title))}>X</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Gallery