import React, { useEffect } from 'react';
import { ARCanvas } from "@artcom/react-three-arjs"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Lesson from './Lesson';

const LessonUI = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <ARCanvas>
          <ambientLight intensity={0.5} />
          <Lesson />
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        </ARCanvas>
      </div>
    </div>
  );
};

export default LessonUI;
