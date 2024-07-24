"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PointLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

type Props = {
  slug: string;
  project: any;
  views: any;
};

function SEP2Model() {
  const ref = useRef<Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 60, 60]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  );
}

const AmbientLightComponent = () => {
  return <primitive object={new AmbientLight()} />;
};

const ClientComponent = ({ slug, project, views }: Props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      <div className="flex flex-row items-start justify-between p-8">
        <div
          className="absolute top-0 left-0 w-[300px] h-[300px] bg-white p-8 rounded-lg shadow-lg"
          style={{ marginLeft: '20px', marginTop: '20px' }}
        >
          <Canvas>
            <AmbientLightComponent />
            <PointLight position={[10, 10, 10]} />
            <OrbitControls />
            <SEP2Model scale={0.5} />
          </Canvas>
        </div>
        <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg ml-8">
          <article className="prose prose-zinc prose-quoteless">
            <Mdx code={project.body.code} />
          </article>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;