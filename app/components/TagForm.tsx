'use client'

import React from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { TagFormProps } from '../Types';


const TagForm = ({tags, setTags, setUploadSuccess}: TagFormProps) => { 

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setTags({...tags, [name]: value});
    setUploadSuccess(false)
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "tags"), tags )
    console.log(tags)
  }
  return (
    <div className='flex items-center flex-col'>
      <h3 className="form-title text-2xl my-4">Give tags to your image</h3>
      <form onSubmit={handleSubmit} className='flex flex-col w-2/3 md:w-full'>
        <input name= 'tag1' type= 'text' placeholder='First tag' className='tag-input' value={tags.tag1} onChange={handleTagChange}/>
        <input name= 'tag2' type= 'text' placeholder='Second tag' className=' tag-input' value={tags.tag2} onChange={handleTagChange}/>
        <input name= 'tag3' type= 'text' placeholder='Third tag' className='tag-input' value={tags.tag3} onChange={handleTagChange}/>
      </form>
    </div>
  )
}

export default TagForm