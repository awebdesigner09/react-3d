import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

const Scene = () => {
  const [play, setPlay] = useState(false);

  const clickHandler = () => {
    setPlay(!play);
  };

  return (
    <>
      <OrbitControls />

      <mesh onClick={clickHandler}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
