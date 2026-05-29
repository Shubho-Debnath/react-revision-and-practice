import "./App.css";
import Counter from "./components/Counter";

function App() {
  function handleClick() {
    alert("Button clicked from child component");
  }

  return (
    <div>
      <Counter title="React Props Example" onButtonClick={handleClick}>
        <p>This content is passed as children.</p>
      </Counter>
    </div>
  );
}

export default App;
