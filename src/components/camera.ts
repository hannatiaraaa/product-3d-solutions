import { PerspectiveCamera } from 'three';

export const createCamera = ({
  fov = 45,
  near = 0.1,
  far = 100,
  camPos = { x: 0, y: 0, z: 5 },
  camLookAt = { x: 0, y: 0, z: 0 },
  aspect = window.innerWidth / window.innerHeight,
} = {}) => {
  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(camPos.x, camPos.y, camPos.z);
  camera.lookAt(camLookAt.x, camLookAt.y, camLookAt.z);
  camera.updateProjectionMatrix();
  return camera;
};
