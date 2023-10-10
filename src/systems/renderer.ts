import { WebGLRenderer } from 'three';

export const createRenderer = (rendererProps = {}, configureRenderer = (renderer: WebGLRenderer) => {}) => {
  const renderer = new WebGLRenderer(rendererProps);
  renderer.setPixelRatio(window.devicePixelRatio);

  configureRenderer(renderer);

  return renderer;
};
