import React from 'react'

const Input = ({ text, setText }) => {
  return (
    <div>
      <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something..."
    />
    </div>
  )
}

export default Input
