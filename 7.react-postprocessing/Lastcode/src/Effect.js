import {
  EffectComposer,
  Pixelation,
  Vignette,
  BrightnessContrast,
  ChromaticAberration,
  Scanline,
  Grid,
  DotScreen,
  Noise,
  Glitch,
  GodRays,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef, forwardRef, useEffect } from "react";

const Effect = forwardRef((props, ref) => {
  const scanline = useRef();

  useEffect(() => {
    console.log(ref);
  });

  //   console.log(BlendFunction);

  //   const { brightness, contrast } = useControls({
  //     brightness: { value: 0, min: -1, max: 1, step: 0.01 },
  //     contrast: { value: 0, min: -1, max: 1, step: 0.01 },
  //   });

  //   useFrame((_, delta) => {
  //     scanline.current.density += delta * 0.5;
  //   });

  return (
    <EffectComposer>
      {/* <Pixelation granularity={10} /> */}
      {/* <Vignette
        offset={0.2}
        darkness={1.2}
        eskill={false}
        blendFunction={BlendFunction.NORMAL}
      /> */}
      {/* <BrightnessContrast brightness={brightness} contrast={contrast} /> */}
      {/* <ChromaticAberration offset={[0.02, 0.02]} /> */}
      {/* <Scanline density={7} ref={scanline} /> */}
      {/* <Grid scale={0.25} lineWidth={0.1} /> */}
      {/* <DotScreen scale={0.1} angle={Math.PI * 0.25} /> */}
      {/* <Noise /> */}
      {/* <Glitch delay={[1.5, 3.5]} duration={[1, 10]} strength={[3, 10.0]} /> */}
      {ref.current && <GodRays sun={ref.current} samples={60} density={0.45} />}
    </EffectComposer>
  );
});

export default Effect;
