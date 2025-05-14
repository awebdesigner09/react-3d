import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Model = () => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  console.log(model);
  console.log(animations);

  //   useEffect(() => {
  //     animations.actions.Idle.play();
  //   }, []);

  return <primitive position-y={-0.4} object={model.scene} />;
};
useGLTF.preload("./model/dog.glb");

export default Model;
