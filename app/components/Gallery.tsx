'use client'

import React, { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { GalleryProps } from '../page';

const Gallery: FC<GalleryProps> = ({filteredImages, isLoading}) => {
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

  useEffect(() => {
    { filteredImages.length > 0 && filteredImages.length < 3 ? selectImage(0) : selectImage(2) };
  }, [filteredImages]);

  // console.log(filteredImages)

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
            <div key={image.imageUrl} className={`flipper`}>
              <div
                className="image-gallery front w-full sm:w-3/4 sm:h-auto flex duration-700 ease-out origin-center rounded-lg bg-no-repeat bg-white bg-contain bg-center mb-12 cursor-pointer"
                onClick={(image) => {
                  if (selectedIndex.current !== index) {
                    selectImage(index);
                  } else {
                    flipImage(image, index);
                  }
                }}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  boxShadow: "10px 10px 20px -2px rgba(0,0,0,0.85)",
                  backgroundImage: `url(${image.imageUrl})`,
                }}
              />
              <p  className="details hidden">{image.tags[0]}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Gallery