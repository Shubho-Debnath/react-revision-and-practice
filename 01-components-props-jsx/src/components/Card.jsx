import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='main-container'>
      <img src={props.image} alt="" />
      <div className="title-div">
        <h1>{props.name}</h1>
      <div className="p-div">
        <p>{props.year}</p>
        <p>{props.duration} hours</p>
      </div>
      </div>
    </div>
  )
}

export default Card
