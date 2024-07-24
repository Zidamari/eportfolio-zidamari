// app/projects/SEP2Model.tsx
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";

const sections = [
  {
    title: "What is it?",
    content: "Our project aimed to conceptualize and realize a food printing system for the food industry...",
  },
  {
    title: "Goals",
    content: "The team ultimately targeted a specific demographic, end-users diagnosed with Parkinson's disease...",
  },
  {
    title: "My Contribution",
    content: "Did the sketches for the solution, Lead the discussion for the flow of work needed...",
  },
];

function Model({ currentSection }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/path/to/your/model.glb");

  useFrame(() => {
    group.current.rotation.y = currentSection * Math.PI / 2;
  });

  return (
    <group ref={group} dispose={null}>
      <mesh geometry={nodes.YourMesh.geometry} material={materials.YourMaterial} />
    </group>
  );
}

const SEP2Model: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionIndex = Math.min(
      sections.length - 1,
      Math.floor(scrollPosition / window.innerHeight)
    );
    setCurrentSection(sectionIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sep2-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model currentSection={currentSection} />
      </Canvas>
      <div className="sep2-content">
        <h2>{sections[currentSection].title}</h2>
        <p>{sections[currentSection].content}</p>
      </div>
    </div>
  );
};

export default SEP2Model;