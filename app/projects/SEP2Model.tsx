"use client"; // Mark this file as a Client Component

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Threeasy from 'threeasy';

type SEP2ModelProps = {
  className?: string;
};

const SEP2Model: React.FC<SEP2ModelProps> = ({ className }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new Threeasy(THREE, { alpha: true, canvas: canvasRef.current });

    const loader = new GLTFLoader();
    const modelUrl = '/models/SEP2Model.gltf';

    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.4, 0.4, 0.4);
        model.rotation.set(1, 0.4, 0);

        app.scene.add(model);

        const onScroll = () => {
          const scrollY = window.scrollY;
          const rotationSpeed = 0.001;
          model.rotation.x = scrollY * rotationSpeed;
          model.rotation.y = scrollY * rotationSpeed;
        };

        window.addEventListener('scroll', onScroll);

        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const light = new THREE.AmbientLight(0xffffff, 3); // soft white light
    app.scene.add(light);

    return () => {
      app.dispose();
    };
  }, []);

  return <div ref={canvasRef} className={`w-full h-full ${className}`} />;
};

export default SEP2Model;