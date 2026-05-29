import React, { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true)

  // =========================
  // 1. IF-ELSE METHOD
  // =========================
  let ifElseContent;

  if (!isLoggedIn) {
    ifElseContent = <Login />
  } else {
    ifElseContent = <Logout />
  }

  return (
    <div className='box'>

      <h1>1. If-Else Method</h1>
      {ifElseContent}

      <hr />

      {/* ========================= */}
      {/* 2. TERNARY OPERATOR */}
      {/* ========================= */}

      <h1>2. Ternary Operator</h1>
      {
        isLoggedIn ? (
          <Logout />
        ) : (
          <Login />
        )
      }

      <hr />

      {/* ========================= */}
      {/* 3. LOGICAL AND OPERATOR */}
      {/* ========================= */}

      <h1>3. Logical AND Operator</h1>
      {
        isLoggedIn && (
          <Logout />
        )
      }

      <hr />

      {/* ========================= */}
      {/* 4. EARLY RETURN METHOD */}
      {/* ========================= */}

      <h1>4. Early Return Method</h1>
      {
        !isLoggedIn ? (
          <Login />
        ) : (
          <Logout />
        )
      }

    </div>
  )
}

export default App