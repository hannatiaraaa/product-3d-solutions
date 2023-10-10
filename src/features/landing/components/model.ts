import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EThreeColor } from 'configs/Color.enum';
import type { TMixerRef, TModel } from 'types/model.type';

const createLightsModel = (model: TModel) => {
  const directionalLight = new THREE.DirectionalLight(EThreeColor['landing-light'], 0.8);
  directionalLight.position.set(0, 0, 20);
  model.add(directionalLight);

  const emissivePartMaterial = new THREE.MeshBasicMaterial({ color: EThreeColor.cyan });
  model.material = emissivePartMaterial;

  const pointLight = new THREE.PointLight(EThreeColor.white, 1, 5);
  pointLight.position.set(3, -10, -1);
  model.add(pointLight);
};

export const createModel = (scene: THREE.Scene, mixerRef: TMixerRef) => {
  const loader = new GLTFLoader();
  loader.load('/models/planetary_nebula/scene.gltf', (gltf) => {
    const model: TModel = gltf.scene;
    const animationClip = gltf.animations[0];
    console.log(gltf);
    if (animationClip) {
      mixerRef.current = new THREE.AnimationMixer(model);
      const action = mixerRef.current.clipAction(animationClip);
      action.play();
    }

    model.position.set(1, 0, 1);
    model.scale.set(0.15, 0.15, 0.15);

    scene.add(model);
    createLightsModel(model);
  });

  const animate = () => {
    if (mixerRef.current) {
      mixerRef.current.update(0.001);
    }
  };

  return animate;
};
