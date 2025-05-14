import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    const savedCounter = parseInt(localStorage.getItem("counter")??0)
    setCounter(savedCounter)
  },[])

  useEffect(()=>{
    localStorage.setItem("counter",counter)
  },[counter])


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
