import React from 'react'

import {images} from '../../constants'

/* 🍖55:00 header.jsx */
const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>    
      <h1 style={{background:'green'}}>{title}</h1>
      <img src={images.spoon} className='spoon__img'/>    
    </div>
  )
}

export default SubHeading;