import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function expensiveCalculation(num) {
    console.log("Running expensive calculation...");

    let result = 0;

    for (let i = 0; i < 500000000; i++) {
      result += i;
    }

    return num * 2;
  }

  const doubledNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <h2>useMemo Demo</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      <p>Count: {count}</p>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />

      <p>Doubled Number: {doubledNumber}</p>
    </div>
  );
}

export default App;