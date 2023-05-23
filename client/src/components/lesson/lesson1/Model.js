// Model.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function Model() {
  const gltf = useLoader(GLTFLoader, '/model.gltf', []);
  const texture = useLoader(TextureLoader, '/texture.jpg', []);
  
  return (
    <mesh>
      <primitive object={gltf.scene} />  
      {/* 使用primitive组件渲染模型对象 */}
      <meshStandardMaterial map={texture} />  
      {/* 使用meshStandardMaterial组件渲染纹理对象 */}
    </mesh>
  );
}

export default Model;