declare module 'three' {
  export * from 'three/src/Three';
  
  // Add explicit declarations for commonly used Three.js classes
  export class Scene {
    add(object: any): this;
  }
  
  export class Mesh {
    constructor(geometry?: any, material?: any);
    rotation: { x: number; y: number; z: number };
  }
  
  export class WebGLRenderer {
    constructor(options?: { alpha?: boolean });
    setSize(width: number, height: number): void;
    domElement: HTMLCanvasElement;
    render(scene: Scene, camera: PerspectiveCamera): void;
  }
  
  export class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number);
    position: Vector3;
    aspect: number;
    updateProjectionMatrix(): void;
  }
  
  export class BoxGeometry {
    constructor(width: number, height: number, depth: number);
  }
  
  export class MeshPhongMaterial {
    constructor(params: any);
  }
  
  export class DirectionalLight {
    constructor(color: number, intensity: number);
    position: Vector3;
  }
  
  export class Points {
    rotation: { x: number; y: number };
  }
  
  export const DoubleSide: number;
  
  export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): this;
    copy(v: Vector3): this;
  }
  
  export namespace MathUtils {
    function randFloatSpread(range: number): number;
  }
}

declare module '@react-three/fiber' {
  import { ThreeElements } from '@react-three/fiber';
  
  // Explicitly declare Canvas
  import { FC, ReactNode } from 'react';
  interface CanvasProps {
    children?: ReactNode;
    camera?: any;
    gl?: any;
    shadows?: boolean;
    [key: string]: any;
  }
  export const Canvas: FC<CanvasProps>;
  
  // Explicitly declare useFrame
  export function useFrame(callback: (state: any) => void): void;
  
  export * from '@react-three/fiber/dist/declarations';
  export { ThreeElements };
}

declare module '@react-three/drei' {
  import { DreiElements } from '@react-three/drei';
  export * from '@react-three/drei/core';
  export { DreiElements };
}