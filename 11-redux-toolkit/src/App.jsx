import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";

const App = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementCLick() {
    dispatch(increment());
  }
  function handledecrementCLick() {
    dispatch(decrement());
  }
  function handleInputCLick() {
    dispatch(incrementByAmount(inputAmount));
    setInputAmount(0)
    
  }
  function handleResetClick() {
    dispatch(reset());
    
  }

  return (
    <div className="manContainer">
      <div className="container">
        <button onClick={handleIncrementCLick}>+</button>
        <p>{count}</p>
        <button onClick={handledecrementCLick}>-</button>
      </div>
      <div className="inputDiv">
        <input
          type="number"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          placeholder="Input Amount"
        />
        <button className="inputBtn" onClick={handleInputCLick}>Incremnet by input amount</button>
      </div>
      <button className="resetBtn" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default App;
