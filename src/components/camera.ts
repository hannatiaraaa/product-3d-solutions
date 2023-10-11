import { PerspectiveCamera } from 'three';
import { setRendererSize } from 'utils/systems/renderer';

type Props = {
  fov?: number;
  near?: number;
  far?: number;
  camPos?: {
    x: number;
    y: number;
    z: number;
  };
  camLookAt?: {
    x: number;
    y: number;
    z: number;
  };
  aspect?: number;
};

export const createCamera = (props: Props = {}) => {
  const rendererSize = setRendererSize(window);
  const {
    fov = 45,
    near = 0.1,
    far = 100,
    camPos = { x: 0, y: 0, z: 5 },
    camLookAt = { x: 0, y: 0, z: 0 },
    aspect = rendererSize.width / rendererSize.height,
  } = props;

  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(camPos.x, camPos.y, camPos.z);
  camera.lookAt(camLookAt.x, camLookAt.y, camLookAt.z);
  camera.updateProjectionMatrix();
  return camera;
};
