import * as THREE from 'three';
import { createRenderer } from 'utils/systems/renderer';
import type { TSize } from 'types/systems';

export const createProductsRenderer = (transparent?: boolean, size?: TSize) => {
  let renderer = createRenderer({ antialias: true, alpha: transparent }, size);

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  return renderer;
};
