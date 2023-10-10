import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createLandingCamera } from './components/camera';
import { createRenderer } from 'systems/renderer';
import { Resizer } from 'systems/Resizer.class';
import { createModel } from './components/model';
import { createFireworks } from './components/fireworks';
import { createLandingControls } from './systems/controls';
import type { TMixerRef } from 'types/model.type';
import { EThreeColor } from 'configs/Color.enum';

const LandingScene = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const mixerRef: TMixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(EThreeColor['bg-landing']);
    const canvas = canvasRef.current;

    const { camera, animateCamera } = createLandingCamera();
    let renderer = createRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    let resizer;
    if (canvas) {
      canvas.appendChild(renderer.domElement);
      resizer = new Resizer(canvas, camera, renderer);
    }

    const animateModel = createModel(scene, mixerRef);
    const animateFireworks = createFireworks(scene);
    const controls = createLandingControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);

      animateModel();
      animateFireworks();
      animateCamera();
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default LandingScene;
