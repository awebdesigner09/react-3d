const Scene = () => {
  return (
    <>
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export default Scene;
