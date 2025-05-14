import { a, useSpring } from "@react-spring/three";

const Scene = () => {
  const { x } = useSpring({
    from: { x: -2 },
    to: { x: 2 },
  });

  return (
    <>
      <a.mesh position-x={x}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </a.mesh>
    </>
  );
};

export default Scene;
