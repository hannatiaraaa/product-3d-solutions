import { Vector3 } from 'three';
import { createCamera } from 'components/camera';

export const createLandingCamera = (aspect?: number) => {
  const target = new Vector3(-1, 1, 5);
  let theta = Math.PI / 6;
  let phi = Math.PI;
  const radius = 1;

  const cameraX = radius * Math.sin(phi) * Math.cos(theta) + target.x;
  const cameraY = radius * Math.cos(phi) + target.y;
  const cameraZ = radius * Math.sin(phi) * Math.sin(theta) + target.z;
  const camera = createCamera({ aspect, camPos: { x: cameraX, y: cameraY, z: cameraZ } });

  const animateCamera = () => {
    theta -= 0.01;
    phi -= 0.001;
  };

  return { camera, animateCamera };
};
