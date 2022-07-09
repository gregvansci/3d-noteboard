import React from 'react';
import './App.css'
import { Canvas } from '@react-three/fiber';


function App() {
  return (
    <div className="h-auto App">
      <Canvas shadowMap colorManagement camera={{ fov: 90}}> 
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 3, 10]} intensity={.2}/>
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <mesh castShadow >
          <boxBufferGeometry attach="geometry" args={[3.2, 2, 1]} />
          <meshStandardMaterial attach="material" color="#DCD7C9" />
        </mesh>

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0,-3,0]}>
            <planeBufferGeometry attach="geometry" args={[10, 10]} />
            <shadowMaterial attach='material' />
          </mesh>
        </group>
        
      </Canvas>
    </div>
  );
}

export default App;