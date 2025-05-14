import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas>
      <Scene />
      <Perf position="top-left" />
    </Canvas>
  </>
);
