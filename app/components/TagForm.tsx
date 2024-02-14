'use client'

import { useState } from "react";
import React from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { TagFormProps } from "../page";


const TagForm: React.FC<TagFormProps> = ({tags, setTags, imageTitle, setImageTitle}) => { 

  const handleTitleChange = (e: any) => {
    setImageTitle(e.target.value);
  }

  const handleTagChange = (e: any) => {
    const {name, value} = e.target
    setTags({...tags, [name]: value});
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, "tags"), tags )
    console.log(tags)
  }
  return (
    <div className=' lg:w-2/5 my-12 mx-auto'>
      <h3 className="form-title text-2xl mb-4">Gib deinem Bild Tags</h3>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input name='imageTitle' type='text' placeholder='Give your image a title' className="tag-input" value={imageTitle} onChange={handleTitleChange}></input>
        <input name= 'tag1' type= 'text' placeholder='Ersten Tag' className='tag-input' value={tags.tag1} onChange={handleTagChange}/>
        <input name= 'tag2' type= 'text' placeholder='Zweiten Tag' className=' tag-input' value={tags.tag2} onChange={handleTagChange}/>
        <input name= 'tag3' type= 'text' placeholder='Dritten Tag' className='tag-input' value={tags.tag3} onChange={handleTagChange}/>
      </form>
    </div>
  )
}

export default TagForm