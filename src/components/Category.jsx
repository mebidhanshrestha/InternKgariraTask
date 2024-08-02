import React from 'react'
import "../sass/Category.scss"

function Category({text}) {
  return (
    <div className='category'>
        <p>{text}</p>
    </div>
  )
}

export default Category