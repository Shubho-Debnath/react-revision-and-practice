import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //variation 1
  useEffect(() => {
    alert("runs on every render");
  });

  //variation 2
  useEffect(() => {
    alert("runs on first render");
  }, []);
  //variation 3
  useEffect(() => {
    alert("runs when count is updated");
  }, [count]);
  //variation 4
  useEffect(() => {
    alert("runs when any of the dependencies is updated");
  }, [count, count2]);
  //variation: 5

  useEffect(() => {
    alert("Count is updated");
    return () => {
      alert("count is unmounted from UI");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click</button>
      <br />
      <br />
    </div>
  );
};

export default App;
