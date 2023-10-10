export type TMixerRef = React.MutableRefObject<THREE.AnimationMixer | null>;

export interface TModel extends THREE.Group<THREE.Object3DEventMap> {
  material?: THREE.MeshBasicMaterial;
}
