import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  function increaseCount(){
    setCount(count + 1)
  }
  return (
    <div className='box'>
        <h1>You have clicked <span>{count}</span> times</h1>
        <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

export default Counter
