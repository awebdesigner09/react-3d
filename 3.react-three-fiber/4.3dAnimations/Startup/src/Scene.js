import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial />
      </mesh>

      <OrbitControls />
    </>
  );
};

export default Scene;
