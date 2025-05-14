import { useRef, useEffect } from "react";

const App = () => {
  const titleRef = useRef();

  useEffect(() => {
    titleRef.current.innerText = "anything";
  }, []);

  return <h1 ref={titleRef}>React Application </h1>;
};

export default App;
