import { PerspectiveCamera, WebGLRenderer } from 'three';
import { setRendererSize } from './renderer';
import type { TSize } from 'types/systems';

const setSize = (camera: PerspectiveCamera, renderer: WebGLRenderer, size: TSize = {}) => {
  const rendererSize = setRendererSize(window);
  const { width = rendererSize.width, height = rendererSize.height } = size;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
};

export const onResize = (camera: PerspectiveCamera, renderer: WebGLRenderer, size?: TSize) => {
  setSize(camera, renderer, size);

  window.addEventListener('resize', () => {
    setSize(camera, renderer, size);
  });
};
