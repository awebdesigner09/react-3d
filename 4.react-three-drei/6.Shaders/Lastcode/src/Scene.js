import {
  OrbitControls,
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  MeshDistortMaterial,
  GradientTexture,
  Environment,
  useCursor,
} from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const [hover, setHover] = useState(false);
  const planeRef = useRef();
  useCursor(hover);

  const { lerp } = THREE.MathUtils;

  useFrame(() => {
    planeRef.current.material.distort = lerp(
      planeRef.current.material.distort,
      hover ? 0.4 : 0,
      hover ? 0.05 : 0.01
    );
  });

  // useEffect(() => {
  //   if (hover) {
  //     planeRef.current.material.distort = 0.4;
  //   } else {
  //     planeRef.current.material.distort = 0;
  //   }
  // }, [hover]);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {/* <Environment background files="./envMap/1.hdr" /> */}

      {/* <mesh>
        <boxGeometry args={[1, 1, 1, 32, 32, 32]} />
        <MeshWobbleMaterial color="#F76E53" factor={3} speed={0.4} />
      </mesh> */}

      {/* <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
        <planeGeometry args={[6, 6]} />
        <MeshReflectorMaterial
          resolution={512}
          color="gray"
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={1}
        />
      </mesh> */}

      <mesh
        ref={planeRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry args={[2, 3, 64, 64]} />
        <MeshDistortMaterial speed={3} distort={0}>
          <GradientTexture colors={["aquamarine", "hotpink"]} stops={[0, 1]} />
        </MeshDistortMaterial>
      </mesh>
    </>
  );
};

export default Scene;
