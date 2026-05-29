import React, { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()
  const [input, setInput] = useState()

  function expensiveTask(num) {
    console.log("Inside Expensive Task")

    for (let i = 0; i <= 1000000000; i++) {}

    return num * 2
  }

  const doubleValue = useMemo(() => {
    return expensiveTask(input)
  }, [input])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App