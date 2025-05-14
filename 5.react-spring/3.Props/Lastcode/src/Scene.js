import { a, useSpring } from "@react-spring/three";
import { useState } from "react";

const Scene = () => {
  const [clicked, setClicked] = useState(false);

  let n = 0;
  const { x, y, color } = useSpring({
    from: { color: "hotpink", x: -2 },
    to: { color: "yellow", x: 2 },
    // to: [
    //   { color: "yellow", x: 2 },
    //   { color: "cyan", y: 2 },
    //   { color: "greenyellow", x: -2 },
    //   { color: "hotpink", y: -2 },
    // ],
    // loop: () => 3 > n++, //should return a boolean value
    delay: 1000,
    // reverse: clicked,
    pause: clicked,
    // reset: clicked,
    config: { mass: 20, tension: 700, friction: 15, clamp: false },
    onStart: () => console.log("onStart"),
    onRest: () => console.log("onRest"),
    onPause: () => console.log("onPause"),
    onResume: () => console.log("onResume"),
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <a.mesh position-x={x} rotation-y={x} onClick={clickHandler}>
        <boxGeometry />
        <a.meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export default Scene;
