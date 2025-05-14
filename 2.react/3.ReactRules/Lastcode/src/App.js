function App() {
  const p = "paragraph";

  const text = () => {
    return "text";
  };

  const myArray = [" A ", " B ", " C "];

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];

  // }

  return (
    <>
      <h2 className="">Let's build our first react application</h2>
      <br />
      <p>this is a {`${p}`}</p>
      <h1>
        {myArray.map((el) => {
          return "my name is " + el;
        })}
      </h1>
      <input id="first-checkbox" type="checkbox" />
      <label htmlFor="first-checkbox">label for checkbox</label>
      {<h1>"text"</h1>}
      {false ? "true" : "false"}
    </>
  );
}

export default App;
