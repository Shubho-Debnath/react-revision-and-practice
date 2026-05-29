import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
      />

      <h2>{name}</h2>
    </div>
  );
}

export default App;