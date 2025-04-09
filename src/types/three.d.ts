declare module 'three' {
  export * from 'three/src/Three';
  
  // Add any missing Three.js type declarations
  export class Points {
    rotation: { x: number; y: number };
    constructor(geometry?: any, material?: any);
  }
}

declare module '@react-three/fiber' {
  import { ReactNode } from 'react';
  import * as THREE from 'three';
  import { ThreeElements } from '@react-three/fiber';
  
  export interface CanvasProps {
    children?: ReactNode;
    camera?: any;
    gl?: any;
    shadows?: boolean;
    [key: string]: any;
  }
  
  export function Canvas(props: CanvasProps): JSX.Element;
  export function useFrame(callback: (state: any) => void): void;
  
  export * from '@react-three/fiber/dist/declarations';
  export { ThreeElements };
}

declare module '@react-three/drei' {
  import { ReactNode } from 'react';
  import * as THREE from 'three';
  import { DreiElements } from '@react-three/drei';
  
  export interface PointsProps {
    positions: Float32Array;
    stride?: number;
    children?: ReactNode;
    ref?: React.RefObject<THREE.Points>;
    [key: string]: any;
  }
  
  export function Points(props: PointsProps): JSX.Element;
  
  export interface PointMaterialProps {
    transparent?: boolean;
    color?: string | number;
    size?: number;
    sizeAttenuation?: boolean;
    depthWrite?: boolean;
    [key: string]: any;
  }
  
  export function PointMaterial(props: PointMaterialProps): JSX.Element;
  
  export * from '@react-three/drei/core';
  export { DreiElements };
}