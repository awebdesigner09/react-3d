import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Effect from "./Effect";

const Scene = () => {
  const circleRef = useRef();

  return (
    <>
      <OrbitControls />

      <Effect ref={circleRef} />

      <mesh position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="rgb(106,115,180)" />
      </mesh>

      <mesh position-z={-12} ref={circleRef}>
        <circleGeometry args={[7, 64]} />
        <meshBasicMaterial color="orange" />
      </mesh>
    </>
  );
};

export default Scene;
