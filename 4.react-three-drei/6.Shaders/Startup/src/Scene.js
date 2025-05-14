import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#F76E53" />
      </mesh>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export default Scene;
