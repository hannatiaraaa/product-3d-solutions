import * as THREE from 'three';
import { createRenderer } from 'systems/renderer';

export const createProductsRenderer = (transparent?: boolean) => {
  let renderer = createRenderer({ antialias: true, alpha: transparent });

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  return renderer;
};
