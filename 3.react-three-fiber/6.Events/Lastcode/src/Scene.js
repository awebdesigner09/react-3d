import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

// onClick={(e) => console.log('click')}
// onContextMenu={(e) => console.log('Right Click')}
// onDoubleClick={(e) => console.log('double click')}
// onWheel={(e) => console.log('wheel spins')}
// onPointerUp={(e) => console.log('up')}
// onPointerDown={(e) => console.log('down')}
// onPointerOver={(e) => console.log('over')}
// onPointerOut={(e) => console.log('out')}
// onPointerMove={(e) => console.log('move')}
// onPointerMissed={() => console.log('missed')}
// onUpdate={(self) => console.log('props have been updated')}

const Scene = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <>
      <OrbitControls />

      <mesh onClick={clickHandler} position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={active ? "pink" : "orange"} />
      </mesh>

      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        position-x={-1}
      >
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
