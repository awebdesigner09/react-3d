import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </>
  );
};

export default Scene;
