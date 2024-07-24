"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PointLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
import { AmbientLight } from 'three';

type Props = {
  slug: string;
  project: any;
  views: any;
};

const ClientComponent = ({ slug, project, views }: Props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen overflow-hidden">
      <div className="flex flex-row items-start justify-between p-8">
        <div className="w-1/3 h-[400px] sticky top-8 bg-white p-8 rounded-lg shadow-lg">
          <SEP2Model className="w-full h-full" />
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