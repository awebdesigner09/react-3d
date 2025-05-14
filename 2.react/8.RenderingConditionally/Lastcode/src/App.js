import { useState } from "react";

const App = () => {
  const [showText, setShowText] = useState(true);

  const toggleHandler = () => {
    setShowText(!showText);
  };

  return (
    <>
      <button onClick={toggleHandler}>Toggle</button>
      {showText && <h1>Text</h1>}
    </>
  );
};

export default App;
