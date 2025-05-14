import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Bike from "./Bike";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight />
      <OrbitControls />

      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh> */}

      <Suspense
        fallback={
          <mesh scale-y={2}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <Model />
      </Suspense>

      {/* <Bike scale={0.85} position={[-0.5, 0.75, 0]} /> */}
    </>
  );
};

export default Scene;
