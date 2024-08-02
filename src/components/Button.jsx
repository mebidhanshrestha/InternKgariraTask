import React from 'react'
import '../sass/Button.scss'

function Button({name, color}) {
    
  return (

    <button className={color}>{name}</button>
  )
}

export default Button