import { Camera } from 'three';
import { createControls } from 'utils/systems/controls';

export const createLandingControls = (camera: Camera, domElement: HTMLElement) => {
  const controls = createControls(camera, domElement);

  // limit the vertical rotation
  controls.minPolarAngle = Math.PI / 6; //  -30 degrees in radians
  controls.maxPolarAngle = Math.PI / 6; //  30 degrees in radians

  //  limit the horizontal rotation
  controls.minAzimuthAngle = -Math.PI / 6; //  -30 degrees in radians
  controls.maxAzimuthAngle = Math.PI / 6; //  30 degrees in radians

  return controls;
};
