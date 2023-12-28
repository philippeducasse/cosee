'use client'

import React from 'react';
import useFirestore from './hooks/useFirestore';


const Gallery = () => {
  const { docs, isLoading } = useFirestore('images')
  console.log(docs);
  // insert progress bar here if isloading is true
  return (
    <div className='image-gallery flex'>
      {docs.map((image: any) => (
        <div key={image.imageUrl} className="">
          <figure>
            <img src={image.imageUrl} alt="" width={300} height={300}/>
          </figure>
          <h1>Tags</h1>
          <span>{image.tag1}</span> <span>{image.tag2}</span> <span>{image.tag3}</span>
        </div>
      ))}

    </div>
  )
}

export default Gallery