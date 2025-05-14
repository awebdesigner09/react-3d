import { useState } from "react";
import Card from "./Card";

const App = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const clickCountHandler = () => {
    setClickCount(clickCount + 1);
  };

  const data = [
    {
      id: 1,
      cardName: "John",
      cardAge: "20",
      cardJob: "Engineer",
    },
    {
      id: 2,
      cardName: "Tony",
      cardAge: "30",
      cardJob: "Doctor",
    },
    {
      id: 3,
      cardName: "James",
      cardAge: "40",
      cardJob: "Lawyer",
    },
  ];

  return (
    <>
      {children}
      <br />
      {clickCount}
      <br />
      <br />
      {data.map((dataObject) => {
        return (
          <Card
            key={dataObject.id}
            counter={clickCountHandler}
            cardName={dataObject.cardName}
            cardAge={dataObject.cardAge}
            cardJob={dataObject.cardJob}
          />
        );
      })}
    </>
  );
};

export default App;
