import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
            <NavLink to='/' className={({isActive})=>isActive? 'active': ''}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive})=>isActive? 'active': ''}>About</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive})=>isActive? 'active': ''}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
