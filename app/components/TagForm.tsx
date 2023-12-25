'use client'

import { useState } from "react"
import React from 'react'


const TagForm = () => {

  const [tags, setTags] = useState({
    tag1: '',
    tag2: '',
    tag3: '',
  });

// name refers to tha name attribute on hte input field.
  const handleInputChange = (e: any) => {
    const {name, value} = e.target
    // spread operator used used to display rest of the tags
    setTags({...tags, [name]: value});
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(tags)
  }
  return (
    <div className='flex'>
      <h3 className="form-title">Give tags to your images</h3>
      <form onSubmit={handleSubmit} className='form flex-col'>
        <input name= 'tag1' type= 'text' className='form-input m-3' value={tags.tag1} onChange={handleInputChange}/>
        <input name= 'tag2' type= 'text' className='form-input m-3' value={tags.tag2} onChange={handleInputChange}/>
        <input name= 'tag3' type= 'text' className='form-input m-3' value={tags.tag3} onChange={handleInputChange}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TagForm