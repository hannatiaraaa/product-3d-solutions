import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createCamera } from 'components/camera';
import { createProductsRenderer } from './systems/renderer';
import { onResize } from 'utils/systems/onResize';
import { createControls } from 'utils/systems/controls';
import { createCupcakeModel } from './components/cupcake/model';
import { createCoffeeModel } from './components/coffee/model';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  model?: 'cupcake' | 'coffee';
  width?: number;
  height?: number;
}

const ProductsScene = ({ model = 'cupcake', width, height, ...props }: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const canvas = canvasRef.current;

    const camera = createCamera({ aspect: width && height ? width / height : undefined });
    let renderer = createProductsRenderer(model === 'coffee' ? true : false, { width, height });

    canvas?.appendChild(renderer.domElement);
    onResize(camera, renderer, width && height ? { width, height } : undefined);

    const controls = createControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI / 2;

    if (model === 'cupcake') {
      createCupcakeModel(scene, camera);
    }

    if (model === 'coffee') {
      createCoffeeModel(scene, camera);
      controls.minPolarAngle = Math.PI / 2;
    }

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      {...props}
    />
  );
};

export default ProductsScene;
