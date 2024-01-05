'use client'

import { useState } from "react";
import React from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { TagFormProps } from "../page";


const TagForm: React.FC<TagFormProps> = ({tags, setTags}) => { 

  const handleInputChange = (e: any) => {
    const {name, value} = e.target
    // spread operator used used to display rest of the tags
    setTags({...tags, [name]: value});
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, "tags"), tags )
    console.log(tags)
  }
  return (
    <div className=' my-12 mx-auto w-50 bg-slate-300 text-center'>
      <h3 className="form-title">Give tags to your images</h3>
      <form onSubmit={handleSubmit} className='text-center'>
        <input name= 'tag1' type= 'text' placeholder='Enter your first tag' className='form-input m-3' value={tags.tag1} onChange={handleInputChange}/>
        <input name= 'tag2' type= 'text' placeholder='Enter your second tag' className='form-input m-3' value={tags.tag2} onChange={handleInputChange}/>
        <input name= 'tag3' type= 'text' placeholder='Enter your third tag' className='form-input m-3' value={tags.tag3} onChange={handleInputChange}/>
      </form>
    </div>
  )
}

export default TagForm