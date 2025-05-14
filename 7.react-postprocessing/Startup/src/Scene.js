import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <mesh position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="rgb(106,115,180)" />
      </mesh>
    </>
  );
};

export default Scene;
