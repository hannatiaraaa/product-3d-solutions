import { Camera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const createControls = (camera: Camera, domElement: HTMLElement) => {
  const controls = new OrbitControls(camera, domElement);

  controls.enableDamping = true;
  controls.dampingFactor = 0.5;
  controls.enableZoom = false;

  return controls;
};
