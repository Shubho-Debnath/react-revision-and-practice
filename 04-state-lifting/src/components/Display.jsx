import React from 'react'

const Display = ({ text }) => {
  return (
    <div>
      <h2 style={{ marginTop:"10px" }} >You typed: {text}</h2>
    </div>
  )
}

export default Display
