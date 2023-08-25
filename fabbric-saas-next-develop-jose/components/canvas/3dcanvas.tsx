import { useState, FC } from "react";

// import ListFemaleFamilies from '@/services/getEditorFemaleFamilies';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props: any) {
  // const { scene } = useGLTF("@/assets/glb/bmw_m4_competition_m_package.glb");
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />;
}



export default function Canvas3dObject({ }) {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: "relative" }}
    >
      <color attach="background" args={["#ffffff"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
