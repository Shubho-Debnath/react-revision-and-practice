import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    function handleClick(){
        navigate('./about')
    }
  return (
    <div className='home-main'>
      <h1>Home</h1>
      <button onClick={handleClick}>About</button>
    </div>
  )
}

export default Home
