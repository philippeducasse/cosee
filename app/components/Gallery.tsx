"use client";

import React, { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { GalleryProps, ImageType } from "../Types";
import Image from "next/image";

const Gallery: FC<GalleryProps> = ({ filteredImages, isLoading }) => {
  const [flippedImages, setFlippedImages] = useState<{
    [key: number]: boolean;
  }>({});
  const imageWidth =
    typeof window !== "undefined" && window.innerWidth < 500 ? 150 : 250;
  const imageHeight =
    typeof window !== "undefined" && window.innerWidth < 500 ? 200 : 275;

  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);
  // Reference to gallery container
  const galleryContainer = useRef<HTMLDivElement>(null);

  // resets styles for previously selected images
  const unselectImages = () => {
    const children = galleryContainer.current!.children;
    Array.from(children).forEach((child) => {
      const galleryImage = child as HTMLDivElement;
      galleryImage.style.transform = "scale(1)";
      galleryImage.style.zIndex = "0";
      galleryImage.classList.remove("flip");

      let targetArrow = galleryImage.querySelector(".corner");
      targetArrow!.classList.remove("show-arrow");
    });
  };


  const selectImage = (targetIndex: number) => {
    const children = galleryContainer.current!.children;
    if (
      selectedIndex.current !== -1 &&
      selectedIndex.current < children.length
    ) {
      unselectImages();
    }

    // set style for new selected image
    let targetGalleryImage = children[targetIndex] as HTMLDivElement;
    if (!targetGalleryImage) return;
    targetGalleryImage.style.transform = "scale(1.5)";
    targetGalleryImage.style.zIndex = "10";
    // updated selectedIndex with current targetIndex
    selectedIndex.current = targetIndex;
    // update container width
    galleryContainer.current!.style.transform = `translateX(calc(50% - ${imageWidth * targetIndex + imageWidth * 0.4
      }px))`;

    let targetArrow = targetGalleryImage.querySelector(".corner");
    targetArrow!.classList.add("show-arrow");
    setFlippedImages({});
  };

  const flipImage = (event: React.MouseEvent, index: number) => {
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
    }
  };

  useEffect(() => {
    {
      filteredImages.length > 0 && filteredImages.length < 3
        ? selectImage(0)
        : selectImage(2);
    }
    // reset image sellection when search input changes.
    if (selectedIndex.current !== -1 && galleryContainer.current) {
      unselectImages();
      selectedIndex.current = -1;  // Reset the selectedIndex
    }

    // Automatically select an image based on the available count
    if (filteredImages.length > 0) {
      const indexToSelect = filteredImages.length === 1 ? 0 : 2;
      if (filteredImages.length > indexToSelect) {
        selectImage(indexToSelect);
      }
    }
  }, [filteredImages]);


  return (
    <div
      className="container flex transition-all duration-700"
      ref={galleryContainer}
    >
      {isLoading && <div className="spinner flex mx-auto justify-center"></div>}

      {!isLoading &&
        filteredImages.map((image: ImageType, index: number) => (
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
              className=" front rounded-lg bg-no-repeat bg-white bg-cover bg-center cursor-pointer "
              style={{
                width: imageWidth,
                height: imageHeight,
                backgroundImage: `url(${image.imageUrl})`,
              }}
            />
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="corner"
            />
            {/* BACK */}
            <div
              className="back absolute  rounded-lg bg-no-repeat bg-white bg-center cursor-pointer p-2"
              style={{
                width: imageWidth,
                height: imageHeight,
              }}
            >
              <div className="details flex items-center justify-center flex-col mx-auto h-full">
                {image.ai ? (
                  <Image
                    src="/robot.png"
                    height={100}
                    width={100}
                    alt="AI Generated"
                    className=""
                  />
                ) : (
                  <Image
                    src="/camera.png"
                    height={100}
                    width={100}
                    alt="Human Generated"
                  />
                )}
                <div>
                  <p className="text-lg text-center">Tags: </p>
                  <p className="tags text-xs md:text-sm text-center py-2">
                    {" "}
                    {image.tags[0]}, {image.tags[1]}, {image.tags[2]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
