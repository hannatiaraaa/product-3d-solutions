import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createCupcakeLights } from './lights';
import { EThreeColor } from 'configs/Color.enum';

export const createCupcakeModel = (scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
  scene.background = new THREE.Color(EThreeColor['bg-products']);
  camera.position.set(0, 2, 5);

  const loader = new GLTFLoader();
  loader.load('/models/starbucks_frappuccino_cupcake/scene.gltf', (gltf) => {
    const model = gltf.scene;

    model.position.set(0, -1.5, 0);
    scene.add(model);
    createCupcakeLights(scene);
  });
};
