import React from "react";

const ChildComponent = React.memo((props) => {
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponent;
