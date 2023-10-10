import * as THREE from 'three';
import { EThreeColor } from 'configs/Color.enum';

export const createCupcakeLights = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(EThreeColor['bg-products'], 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(EThreeColor.white, 0.8);
  directionalLight.position.set(3, 5, 5);
  scene.add(directionalLight);
};
