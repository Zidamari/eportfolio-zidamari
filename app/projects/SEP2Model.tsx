import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/SEP2Model.gltf");
  return <primitive object={gltf.scene} scale={0.5} />;
};

const SEP2Model = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default SEP2Model;