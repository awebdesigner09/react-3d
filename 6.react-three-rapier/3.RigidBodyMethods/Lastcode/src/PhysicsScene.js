import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const PhysicsScene = () => {
  const cubeRef = useRef();
  const secondCubeRef = useRef();

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: 1, y: 0, z: 0 });
  };

  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse({ x: 8, y: 0, z: 0 });
  };

  return (
    <>
      <Physics>
        <RigidBody
          ref={cubeRef}
          onCollisionEnter={() => console.log("Collision Enter")}
          onCollisionExit={() => console.log("Collision Exit")}
          onSleep={() => console.log("sleeping")}
          onWake={() => console.log("wake")}
          gravityScale={1}
          restitution={0}
          friction={0}
        >
          <mesh castShadow position={[1.5, 2.5, 0]} onClick={cubeClickHandler}>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody ref={secondCubeRef}>
          <mesh
            castShadow
            position={[-1.5, 2.5, 0]}
            onClick={secondCubeClickHandler}
          >
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" restitution={1} friction={0}>
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default PhysicsScene;
