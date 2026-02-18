import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const RotatingIcon = ({ position, color }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      <pointLight intensity={1} distance={10} color={color} />
    </mesh>
  );
};

const Scene3D = () => {
  const icons = [
    { position: [-3, 0, 0], color: '#61DAFB', label: 'React' },
    { position: [0, 0, 0], color: '#F7DF1E', label: 'JavaScript' },
    { position: [3, 0, 0], color: '#339933', label: 'Node.js' },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {icons.map((icon, i) => (
        <RotatingIcon
          key={i}
          position={icon.position}
          color={icon.color}
        />
      ))}

      <OrbitControls autoRotate autoRotateSpeed={4} />
    </Canvas>
  );
};

export default Scene3D;
