import { useState } from "react";
import Title from "./Title";
import Hello from "./Hello";

const App = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Title />
      <button onClick={toggleHandler}>Toggle</button>
      {toggle && <Hello />}
    </>
  );
};

export default App;
