import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>value : {counter}</div>
      <button onClick={counterHandler}>+</button>
    </>
  );
};

export default Counter;
