import * as THREE from 'three';

export const createCoffeeLights = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight();
  directionalLight.position.set(-5, 5, 10);
  scene.add(directionalLight);
};
