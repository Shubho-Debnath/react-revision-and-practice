import "../components/Counter.css";
const Counter = ({ title, children, onButtonClick }) => {
  return (
    <div className="card">
      <h2>{title}</h2>

      <div>{children}</div>

      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
};

export default Counter;
