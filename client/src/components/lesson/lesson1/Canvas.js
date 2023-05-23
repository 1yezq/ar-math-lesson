import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function useRotation() {
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation(rotation + 0.01);
  });

  return rotation;
}

function MyCanvas() {
  const rotation = useRotation();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[rotation, rotation, rotation]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="#00ff00" />
      </mesh>
    </Canvas>
  );
}

export default MyCanvas;
