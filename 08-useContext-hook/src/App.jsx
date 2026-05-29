import React, { useState, createContext } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// Step 1: Create Context
const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({name:"Shubho"});

  return (
    <div>
      {/* Step 2: Wrap inside Provider */}
      {/* Step 3: Pass value */}
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export { UserContext };