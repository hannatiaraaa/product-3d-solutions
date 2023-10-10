import * as THREE from 'three';

export const createFireworks = (scene: THREE.Scene) => {
  const fireworks = new THREE.Group();
  scene.add(fireworks);

  const particleGeometry = new THREE.BufferGeometry();

  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    const z = (Math.random() - 0.5) * 200;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    colors[i * 3] = Math.random();
    colors[i * 3 + 1] = Math.random();
    colors[i * 3 + 2] = Math.random();
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({ vertexColors: true });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  fireworks.add(particles);

  function animate() {
    fireworks.rotation.x += 0.001;
    fireworks.rotation.y += 0.001;
  }

  return animate;
};
