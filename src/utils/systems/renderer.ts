import { WebGLRenderer, WebGLRendererParameters } from 'three';
import type { TSize } from 'types/systems';
import { getDeviceCategory } from 'utils/functions/getDeviceCategory';

type TWindow = Window & typeof globalThis;

const setRendererSize = (window: TWindow) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const device = getDeviceCategory(width);

  switch (device) {
    case 'sm':
      return { width, height: height * 0.5 };

    case 'md':
      return { width, height: height * 0.6 };

    default:
      return { width, height };
  }
};

const createRenderer = (
  rendererProps: WebGLRendererParameters = {},
  size: TSize = {},
  configureRenderer = (renderer: WebGLRenderer) => {}
) => {
  const rendererSize = setRendererSize(window);
  const { width = rendererSize.width, height = rendererSize.height } = size;
  const renderer = new WebGLRenderer(rendererProps);
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  console.log(renderer, width, height);
  configureRenderer(renderer);

  return renderer;
};

export { setRendererSize, createRenderer };
