import { Physics, RigidBody } from "@react-three/rapier";

//1)react three rapier Github page: https://pmndrs.github.io/react-three-rapier/
//2)rapier official page:https://rapier.rs/docs/user_guides/javascript/colliders/#mass-properties

const PhysicsScene = () => {
  return (
    <Physics gravity={[0, -9.81, 0]}>
      <RigidBody>
        <mesh castShadow position={[1.5, 1.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
          <boxGeometry args={[8, 8, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default PhysicsScene;
