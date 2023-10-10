import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createCoffeeLights } from './lights';

export const createCoffeeModel = (scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
  camera.position.set(-5, 0, 5);

  const loader = new GLTFLoader();
  loader.load('/models/starbucks_coffee_cup/scene.gltf', (gltf) => {
    const model = gltf.scene;

    model.position.set(0, -1, 0);
    model.scale.set(0.3, 0.3, 0.3);
    scene.add(model);
    createCoffeeLights(scene);
  });
};
