declare module 'three' {
  export * from 'three/src/Three';
}

declare module '@react-three/fiber' {
  import { ThreeElements } from '@react-three/fiber';
  export * from '@react-three/fiber/dist/declarations';
  export { ThreeElements };
}

declare module '@react-three/drei' {
  import { DreiElements } from '@react-three/drei';
  export * from '@react-three/drei/core';
  export { DreiElements };
} 