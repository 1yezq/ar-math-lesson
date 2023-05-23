// ARCanvas.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { XR } from '@react-three/xr';
import Model from './Model'; // 这是一个新的组件，用来渲染模型

function ARCanvas() {
  return (
    <Canvas>
      <XR>
        <ambientLight intensity={0.5} />
        <Model /> {/* 在这里渲染模型组件 */}
      </XR>
    </Canvas>
  );
}
export default ARCanvas;
