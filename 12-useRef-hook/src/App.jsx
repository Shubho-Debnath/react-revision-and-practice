import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  let timeRef = useRef(null);
  let textColorChanger=useRef()
  function startCount() {
    textColorChanger.current.style.color="#ffffff"
    timeRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 150);
  }
  function stopCount() {
    clearInterval(timeRef.current);
    textColorChanger.current.style.color="#ebc11b"
  }
  function resetCount() {
    stopCount();
    setCount(0);
    textColorChanger.current.style.color="#ffffff"

  }
  return (
    <div className="parentContainer">
      <h1 ref={textColorChanger }  >{count}</h1>
      <div className="btnContainer">
        <button className="startBtn" onClick={startCount}>
          Start
        </button>
        <button 
        className="stopBtn" 
        onClick={stopCount}>
          Stop
        </button>
        <button className="resetBtn" onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
