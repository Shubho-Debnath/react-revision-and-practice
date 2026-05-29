import React from 'react'
import './Dashboard.css'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard-main'>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  )
}

export default Dashboard
