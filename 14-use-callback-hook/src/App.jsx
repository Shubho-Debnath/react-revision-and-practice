import React, { useState, useCallback, useRef, useEffect, memo } from "react";
// import "./App.css";

const Child = memo(({ onClick }) => {
  console.log("Child Component Rendered");

  return (
    <div>
      <h3 style={{ marginTop: "30px" }}>Child Component</h3>

      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef(null);
  
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === handleClick) {
        console.log("Function NOT re-created");
      } else {
        console.log("Function Re-created");
      }
    }

    previousFunction.current = handleClick;
  }, [handleClick]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "30px", textDecoration: "underline" }}>
        useCallback Demo
      </h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <br />
      <br />

      <input
        type="text"
        value={text}
        placeholder="Type here..."
        onChange={(e) => setText(e.target.value)}
      />

      <p style={{ marginBottom: "30px", textDecoration: "underline" }}>
        Text: {text}
      </p>

      {/* Child Component */}
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
