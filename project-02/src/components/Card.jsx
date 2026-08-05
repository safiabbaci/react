import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="picture"></div>
        <h1>Introduction</h1>
        <p>My name is {props.name}. I'm from {props.city}. I'm a {props.deg} student.</p>
    </div>
  )
}

export default Card