import React, { useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import LessonUI from './LessonUI';

function Lesson() {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');
    socket.onopen = () => setConnected(true);
    socket.onclose = () => setConnected(false);
    socket.onmessage = event => setMessage(event.data);
  }, []);

  const handleColorChange = event => {
    setColor(event.target.value);
  };

  return (
    <div className="lesson-container">
      <div className="lesson-canvas">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={color} />
          </mesh>
        </Canvas>
      </div>
      <div className="lesson-ui">
        <LessonUI
          connected={connected}
          message={message}
          color={color}
          onColorChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default Lesson;
