import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

type SEP2ModelProps = {
  className?: string;
};

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/SEP2Model.gltf");
  return <primitive object={gltf.scene} scale={0.7} />;
};

const SEP2Model: React.FC<SEP2ModelProps> = ({ className }) => {
  return (
    <Canvas className={className}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default SEP2Model;