import React, { useState } from "react";

function Counter(props) {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    //both are possible to use
    // setNumber(number + 1);
    setNumber((prevnum) => prevnum + 1);
  };

  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber((prevnum) => prevnum - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
