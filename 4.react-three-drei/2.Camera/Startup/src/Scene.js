import { OrbitControls, Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <Environment background files="./envMap/1.hdr" />

      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default Scene;
